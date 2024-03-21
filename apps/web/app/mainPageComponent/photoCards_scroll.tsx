import React, { useEffect, useState } from 'react';
import ConnectToLine_UnPic from './ConnectToLine_UnPic';
import {ReccomendCard} from './List/ReccomendCard';
import { Link } from "@remix-run/react";


export default function PhotoCards_scroll({thaiLan}:{thaiLan: boolean}) {

    const [showScrollRecRight, setShowScrollRecRight] = useState(false);
    const [showScrollRecLeft, setShowScrollRecLeft] = useState(false);

    const handleShowScrollRecLeft = () => {
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            const scrollPositiomRec_L = recommedationContainer.scrollLeft
            if (scrollPositiomRec_L > 200) {
                setShowScrollRecLeft(true);
            } else {
                setShowScrollRecLeft(false);
            }
        }
    };

    const handleScrollRecRight = () => {
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            recommedationContainer.scrollLeft += 400;
        }
    };

    const handleScrollRecLeft = () => {
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            recommedationContainer.scrollLeft-= 400;
        }
    };

    useEffect(() => {
        console.log(window.scrollX);
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            recommedationContainer.addEventListener('scroll', handleShowScrollRecLeft);
        }
        return () => {
            if (recommedationContainer) {
                recommedationContainer.removeEventListener('scroll', handleShowScrollRecLeft);
            }
        };
    });

    let TBSLR = null;
    if (showScrollRecLeft) {
        TBSLR = "z-40 mt-auto -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-48 ml-12 lg:ml-24 mr-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl hover:scale-150 text-gray-200 shadow-2xl transition ease-out duration-500"
    } else {
        TBSLR = "opacity-0 -z-10 mt-auto -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-48 ml-12 lg:ml-24 mr-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl hover:scale-150 text-gray-200 shadow-2xl transition ease-out duration-500"
    }

    return (
        <div className='absolute top-16 lg:top-44 w-full flex justify-center'>
            <div className="w-10/12 flex justify-center py-4">
                <div className='grid grid-row-2'>
                    <div className="flex justify-center py-4 rounded-3xl bg-cover bg-[url('/img_src/surprised-woman-with-card-hand_2.png')]">
                        <div className='grid grid-row-2'>
                            <div className='grid grid-cols-3'>   
                                <button
                                    className={TBSLR}
                                    onClick={handleScrollRecLeft}
                                    >
                                    <p>&#x2BC7;</p>
                                </button> 
                                <div className="ml-auto mr-auto mt-3 mb-8 h-auto flex justify-center opacity-0">
                                    <img className="mt-2 object-cover h-auto w-8/12 lg:w-10/12 rounded-t-3xl " src="/img_src/surprised-woman-with-card-hand_2.png" alt=""/>
                                </div>
                                <button
                                    className='z-40 mt-auto -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-48 ml-auto mr-12 lg:mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 font-bold bg-teal-600 rounded-full sm:text-2xl lg:text-4xl text-gray-200 shadow-2xl hover:scale-150 transition ease-out duration-500'
                                    onClick={handleScrollRecRight}
                                    >
                                    <p>&#x2BC8;</p>
                                </button> 
                            </div>    
                            <div 
                                className="ml-auto mr-auto mt-6 mb-4 sm:mt-8 sm:mb-6 lg:mt-16 lg:mb-12 w-11/12  flex flex-row snap-start overflow-hidden gap-4 lg:gap-8 scroll-smooth bg-gray-200 bg-opacity-70 border-4 border-lime-500 rounded-3xl px-2 lg:px-8 shadow-2xl"
                                id="recommedationContainer"
                            >
                                            
                                        {ReccomendCard.map((item) => (  
                                            <Link to={item.to}
                                                className={`w-28 h-20 lg:w-60 lg:h-40 rounded-2xl mb-8 mt-4 inline-block hover:scale-105 transition ease-out duration-500 bg-cover bg-center ${item.bttn}`}
                                            >
                                                <div  className="opacity-0">   
                                                    JustUnseenTextForSizingggggggg  
                                                </div>  
                                            </Link>
                                        ))}
                            </div>
                        </div>
                    </div>
                    <ConnectToLine_UnPic thaiLan={thaiLan}/>
                </div>
            </div>
        </div>
    );
}