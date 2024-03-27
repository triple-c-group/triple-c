from flask import Flask
import pandas as pd
import json
import tensorflow as tf
import numpy as np
from flask import request
from flask import jsonify
import urllib

with open(
    "./src/SampleData/lifestyles.json"
) as creditcard:

    data = json.load(creditcard)
df = pd.json_normalize(data)
CreditList = df.values.tolist()
CardtoLife = []
TempLf = []
for i in CreditList:
    a = [0, 0, 0, 0, 0, 0]
    for k in i[2]:
        a[k["id"] - 1] = 1
        if k not in TempLf:
            TempLf += [k]
    CardtoLife += [a]
LifeStyle = sorted(TempLf, key=lambda x: x["id"])
CardLifeMat = tf.constant(CardtoLife, dtype=tf.float32)
with open(
    "./src/SampleData/SampleRating.json"
) as rating:
    rdata = json.load(rating)
rdf = pd.json_normalize(rdata)
RatingList = rdf.values.tolist()
UserRating = [[l["Rating"] for l in i[1]] for i in RatingList]
with open(
    "./src/SampleData/SampleRanking.json"
) as Ranking:
    GotRanking = json.load(Ranking)
df = pd.json_normalize(GotRanking)
RankingList = df.values.tolist()
UserID = [str(i[0]) for i in RankingList]


def jsonid():
    countpop = [0 for i in range(len(CardtoLife))]
    sumpop = [0 for i in range(len(CardtoLife))]
    for i in UserRating:
        for j, k in enumerate(i):
            countpop[j] += (1, 0)[k == 0]
            sumpop[j] += k
    meanpop = [sumpop[i] / countpop[i] for i in range(len(sumpop))]
    C = sum(countpop) / len(countpop)
    m = sum(meanpop) / len(meanpop)

    def BayesAve(CardIndex):
        return (C * m + sumpop[CardIndex]) / (C + countpop[CardIndex])

    tempid = dict()
    jsonid = []
    for j, i in enumerate([i[0] for i in CreditList]):
        tempid[i] = BayesAve(j)
    RankedID = sorted(tempid.items(), key=lambda x: x[1], reverse=True)
    for i in RankedID:
        tempdict = {}
        tempdict["CardID"] = i[0]
        jsonid += [tempdict]
    return jsonid


def GetRanking(id: str, amount: int):
    with open(
        r"triple-c/apps/recommendation-engine/src/SampleData/SampleRanking.json"
    ) as Ranking:
        GotRanking = json.load(Ranking)
    df = pd.json_normalize(GotRanking)
    RankingList = df.values.tolist()
    UserRanking = [[l for l in i[1]] for i in RankingList]
    UserRating = [[l["Rating"] for l in i[1]] for i in RatingList]
    UserRatingMat = tf.constant(UserRating, dtype=tf.float32)
    WeightForRank = tf.cast(
        tf.reduce_sum(
            tf.reduce_sum(CardtoLife, axis=1, keepdims=True), 0, keepdims=True
        ),
        tf.float32,
    )
    weightedmat = tf.matmul(UserRatingMat, CardLifeMat)
    weightedmat /= tf.reduce_sum(weightedmat, axis=1, keepdims=True)
    TempRank = {}
    for i in range(6):
        TempRank[i] = (0.5 ** (i + 1), 3 * 0.5 ** (i + 2))[i == 4]
    RankList = [
        list(map(lambda x: TempRank[x["Ranking"]], sorted(k, key=lambda x: x["id"])))
        for k in UserRanking
    ]
    RankListTf = tf.constant(RankList, dtype=tf.float32)
    RankListTf *= WeightForRank
    AddedResult = tf.add(tf.matmul(UserRatingMat, CardLifeMat), RankListTf)
    AddedResult /= tf.reduce_sum(weightedmat, axis=1, keepdims=True) + WeightForRank
    RankedResult = tf.matmul(AddedResult, tf.transpose(CardLifeMat))
    RecommendTemp = tf.where(
        tf.equal(UserRatingMat, tf.zeros_like(UserRatingMat)),
        RankedResult,
        tf.zeros_like(tf.cast(UserRatingMat, tf.float32)),
    )
    Recommend = tf.nn.top_k(RecommendTemp, amount)[1].numpy().tolist()
    return Recommend[UserID.index(id)] if id in UserID else "ID Not Found"


app = Flask(__name__)


@app.route("/")
def home():
    return "<h1>Home</h1>"


@app.route("/personal")
def personal():
    id = request.args.get("id")
    amount = int(request.args.get("n"))
    return jsonify([{"SortedCard": GetRanking(id, amount)}])


@app.route("/popular")
def popular():
    return jsonify([{"RankedCard": jsonid()}])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
