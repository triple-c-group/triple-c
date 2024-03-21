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
            promotionContainer.scrollLeft += 500;
        }
    };

    const handleScrollProLeft = () => {
        const promotionContainer = document.getElementById('promotionContainer');
        if (promotionContainer) {
            promotionContainer.scrollLeft-= 500;
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
        TBSLP = "col-start-1 col-end-2 z-40 mt-auto -mb-24 sm:-mb-28 lg:-mb-40 ml-auto -mr-12 sm:-mr-16 lg:-mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500"
    } else {
        TBSLP = "opacity-0 -z-10 col-start-1 col-end-2 mt-auto -mb-24 sm:-mb-28 lg:-mb-40 ml-auto -mr-12 sm:-mr-16 lg:-mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500"
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
                        className='col-start-9 col-end-10 z-40 mt-auto -mb-24 sm:-mb-28 lg:-mb-40 ml-auto mr-12 sm:mr-16 lg:mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500'
                        onClick={handleScrollProRight}
                        >
                        <p>&#x2BC8;</p>
                    </button> 
                </div>  
                <div className='grid grid-cols-10 gap-4'>
                    <div 
                        className="col-start-2 col-end-9 ml-auto mr-auto w-full flex flex-row snap-start overflow-x-scroll scroll-smooth gap-4 sm:gap-6 lg:gap-12 mt-2"
                        id="promotionContainer"
                    >
                        {MonthlyPro.map((item) => (  
                            <div className="scroll-ms-6 snap-start">
                                <Link to="https://www.citibank.co.th/en/credit-cards/compare/"
                                    className={`w-32 h-32 sm:w-36 sm:h-36 lg:w-56 lg:h-56 rounded-2xl mb-8 mt-4 inline-block hover:scale-105 transition ease-out duration-500 bg-cover bg-center ${item.bttn}`}
                                >
                                    <div  className="opacity-0">   
                                        JustUnseenTextForSizing   
                                    </div>  
                                </Link>
                            </div>
                        ))}
                    </div>
                </div> 
        </div>
    );
}