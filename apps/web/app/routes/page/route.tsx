import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useThaiLanState } from "../../language_Component/enOrTh";
import CuTopBar from "../../pageComponent/cutopBar_button";
import ToTopButton from "~/im_button/toTopButton";
import ChatActivateButton from "~/im_button/chatActivateButton";
import Search_button from "~/im_button/Search_button";
import Search_buttonPop from "~/im_button/Search_buttonPop";

function Test() {
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
        }
        window.addEventListener("scroll", changeBackground);
        return function unMount() {
          window.removeEventListener("scroll", changeBackground);
        };
      });

      const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };

    return(
        <div>
            <div className="block bg-white w-96 h-96"/>
            <div className="block bg-white w-96 h-96"/>
            <div className="block bg-white w-96 h-96"/>
            <div className="block bg-white w-96 h-96"/>
            <div className='w-full mt-0 bg-turgnoise py-8'> 
                <div className='flex justify-center mt-16 sm:mt-32 lg:mt-56'>
                    <div className='w-11/12 h-1 bg-gray-300 rounded-xl'>
                    </div>
                </div>
                <h1 className='mt-4 ml-5 sm:ml-10 lg:ml-20 sm:text-2xl text-gray-300'>Triple C</h1>
            </div>
            <div>
            <div>
                <CuTopBar 
                  topbarScroll={topbarScroll} 
                  setThaiLan={setThaiLan} 
                  thaiLan={thaiLan}
                />
            </div>
            <div>
                <Search_button setSearchButton={setSearchButton}/>
            </div>
            <div>
                <Search_buttonPop 
                  thaiLan={thaiLan}
                  searchButton={searchButton}
                  setSearchButton={setSearchButton}
                />
            </div>
            <div>
                <ToTopButton
                 toTop={toTop}
                 topbarScroll={topbarScroll} 
                 />
            </div>
            <div>
                <ChatActivateButton/>
            </div>
          </div>
        </div>
    );
}
export default Test;