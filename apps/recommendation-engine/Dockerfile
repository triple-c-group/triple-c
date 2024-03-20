FROM python:3.12-slim

WORKDIR /app

RUN pip install gunicorn

COPY /apps/recommendation-engine/requirements.txt .

RUN pip install -r requirements.txt

COPY /apps/recommendation-engine/src .

CMD [ "gunicorn", "-w", "4", "--bind", "0.0.0.0:5000", "wsgi:app"]
