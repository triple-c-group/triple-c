import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useThaiLanState } from "../../language_Component/enOrTh";
import CuTopBar from "../../pageComponent/cutopBar_button";
import CuBg_blue from "../../pageComponent/cuBg_blue";

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

    return(
        <div>
            <div>
                <CuBg_blue topbarScroll={topbarScroll}/>
            </div>
            <div className='w-full mt-0 bg-gray-300 py-8'> 
            </div>
            <div className='w-full mt-0 bg-teal-600 py-8'> 
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
            </div>

        </div>
    );
}
export default Test;