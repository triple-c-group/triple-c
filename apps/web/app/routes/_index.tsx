import type { MetaFunction } from "@remix-run/node";
import Bg_blue from "../mainPageComponent/Bg_blue";
import TopBar from "../mainPageComponent/topBar_button";
import PhotoCards_scroll from "../mainPageComponent/photoCards_scroll";
import App_news from "../mainPageComponent/App_news";
import Search_button from "~/mainPageComponent/Search_button";
import Search_buttonPop from "~/mainPageComponent/Search_buttonPop";
import MonthlyPromotion from "~/mainPageComponent/monthly_promo";
import CompareCardForum from "~/mainPageComponent/compareCard_forum";
import ApplyHereForum from "~/mainPageComponent/applyHere_forum";
import BlueMidTab from "~/mainPageComponent/blue_mid_tab";
import CSlider from "~/mainPageComponent/cslider";
import { useThaiLanState } from "../language_Component/enOrTh";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Tripple C" },
  ];
};

export default function Index() {

  const [topbarScroll, setTopbarScroll] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const { thaiLan, setThaiLan } = useThaiLanState();

  useEffect(function mount() {
      function changeBackground() {
        console.log(window.scrollY);
        if (window.scrollY >= 30) {
          setTopbarScroll(true)
        } else {
          setTopbarScroll(false)
        }
      };
      window.addEventListener("scroll", changeBackground);
      return function unMount() {
        window.removeEventListener("scroll", changeBackground);
      };
    });

  const handleContactUs = () => {
    document.body.scrollTop = 4600;
    document.documentElement.scrollTop = 4600;
  };

  const handleAboutUs = () => {
    document.body.scrollTop = 4050;
    document.documentElement.scrollTop = 4050;
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };


  return (
    <main className="relative bg-gray-200 ">
              <div>
                <Bg_blue topbarScroll={topbarScroll}/>
              </div>
              <div>
                <PhotoCards_scroll thaiLan={thaiLan}/>
              </div>
              <div>
                <Search_button setSearchButton={setSearchButton}/>
              </div>
              <div>
                <TopBar 
                  topbarScroll={topbarScroll} 
                  setThaiLan={setThaiLan} 
                  thaiLan={thaiLan}
                  handleContactUs={handleContactUs}
                  handleAboutUs={handleAboutUs}
                  toTop={toTop}
                />
              </div>
              <div>
                <CSlider thaiLan={thaiLan}/>
              </div>
              <div>
                <CompareCardForum thaiLan={thaiLan}/>
              </div>
              <div>
                <ApplyHereForum thaiLan={thaiLan}/>
              </div>
              <div>
                <BlueMidTab thaiLan={thaiLan}/>
              </div>
              <div>
                <MonthlyPromotion thaiLan={thaiLan}/>
              </div>
              <div>
                <App_news thaiLan={thaiLan}/>
              </div>
              <div>
                <Search_buttonPop 
                  thaiLan={thaiLan}
                  searchButton={searchButton}
                  setSearchButton={setSearchButton}
                />
              </div>
    </main>
  );
}
