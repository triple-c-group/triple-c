import { Link } from "@remix-run/react";
import {MonthlyPro} from './List/MonthlyPro';
import { useEffect, useState } from 'react';

export default function MonthlyPromotion({thaiLan}:{thaiLan: boolean}) {

    const [showScrollProLeft, setShowScrollProLeft] = useState(false);

    const handleShowScrollProLeft = () => {
        const promotionContainer = document.getElementById('promotionContainer');
        if (promotionContainer) {
            const scrollPositiomPro_L = promotionContainer.scrollLeft
            if (scrollPositiomPro_L > 80) {
                setShowScrollProLeft(true);
            } else {
                setShowScrollProLeft(false);
            }
        }
    };

    const handleScrollProRight = () => {
        const promotionContainer = document.getElementById('promotionContainer');
        if (promotionContainer) {
            promotionContainer.scrollLeft += 400;
        }
    };

    const handleScrollProLeft = () => {
        const promotionContainer = document.getElementById('promotionContainer');
        if (promotionContainer) {
            promotionContainer.scrollLeft-= 400;
        }
    };

    useEffect(() => {
        console.log(window.scrollX);
        const promotionContainer = document.getElementById('promotionContainer');
        if (promotionContainer) {
            promotionContainer.addEventListener('scroll', handleShowScrollProLeft);
        }
        return () => {
            if (promotionContainer) {
                promotionContainer.removeEventListener('scroll', handleShowScrollProLeft);
            }
        };
    });

    let TBSLP = null;
    if (showScrollProLeft) {
        TBSLP = "col-start-1 col-end-2 z-40 mt-auto -mb-20 sm:-mb-24 lg:-mb-28 ml-auto -mr-12 sm:-mr-16 lg:-mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500 border-2"
    } else {
        TBSLP = "opacity-0 -z-10 col-start-1 col-end-2 mt-auto -mb-20 sm:-mb-24 lg:-mb-28 ml-auto -mr-12 sm:-mr-16 lg:-mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500 border-2"
    }

    let MonthlyPromotion = null;
    if (thaiLan) {
        MonthlyPromotion = 'โปรโมชั่นรายเดือน';
    } else {
        MonthlyPromotion = 'Monthly Promotion';
    }

    return(
        <div className='flex justify-center flex-col w-full mt-2 sm:mt-4 xl:mt-8 bg-gray-200'> 
                <div className='grid grid-cols-10 gap-4'>   
                    <button
                        className={TBSLP}
                        onClick={handleScrollProLeft}
                        >
                        <p>&#x2BC7;</p>
                    </button>     
                    <div className='col-start-2 col-end-9 ml-0 mr-auto w-10/12 text-12 font-sans font-bold tracking-tight text-gray-900 sm:text-2xl'>
                        {MonthlyPromotion}
                    </div>
                    <button
                        className='col-start-9 col-end-10 z-40 mt-auto -mb-20 sm:-mb-24 lg:-mb-28 ml-auto mr-12 sm:mr-16 lg:mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500 border-2'
                        onClick={handleScrollProRight}
                        >
                        <p>&#x2BC8;</p>
                    </button> 
                </div>   
                <div 
                    className="ml-auto mr-auto w-10/12 flex flex-row snap-start overflow-x-scroll scroll-smooth gap-3 sm:gap-4 lg:gap-8 mt-2"
                    id="promotionContainer"
                >
                    {MonthlyPro.map((item) => (  
                        <Link to="https://www.citibank.co.th/en/credit-cards/compare/"
                        className={item.bttn}
                        >
                            <div  className="opacity-0">   
                                JustUnseenTextForSizing   
                            </div>  
                        </Link>
                    ))}
                </div>
        </div>
    );
}