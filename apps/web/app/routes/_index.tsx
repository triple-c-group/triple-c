import type { MetaFunction } from "@remix-run/node";
import Bg_blue from "../component/Bg_blue";
import TopBar from "../component/topBar_button";
import PhotoCards_scroll from "../component/photoCards_scroll";
import App_news from "../component/App_news";
import Search_button from "~/component/Search_button";
import Search_buttonPop from "~/component/Search_buttonPop";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Tripple C" },
  ];
};

export default function Index() {

  const [topbarScroll, setTopbarScroll] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [thaiLan, setThaiLan] = useState(false)

  useEffect(function mount() {
      function changeBackground() {
        console.log(window.scrollY);
        if (window.scrollY >= 30) {
          setTopbarScroll(true)
        } else {
          setTopbarScroll(false)
        }
      }
      window.addEventListener("scroll", changeBackground);
      return function unMount() {
        window.removeEventListener("scroll", changeBackground);
      };
    });

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
                />
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
