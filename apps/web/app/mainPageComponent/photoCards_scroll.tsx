import React, { useEffect, useState } from 'react';
import { SVGAttributes } from "react";
import ConnectToLine_UnPic from './ConnectToLine_UnPic';
import {ReccomendCard} from './List/ReccomendCard';
import { Link } from "@remix-run/react";


export default function PhotoCards_scroll({thaiLan}:{thaiLan: boolean}, props: SVGAttributes<SVGElement>) {

    const [showScrollRecRight, setShowScrollRecRight] = useState(false);
    const [showScrollRecLeft, setShowScrollRecLeft] = useState(false);

    const handleShowScrollRecLeft = () => {
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            const scrollPositiomRec_L = recommedationContainer.scrollLeft
            if (scrollPositiomRec_L > 20) {
                setShowScrollRecLeft(true);
            } else {
                setShowScrollRecLeft(false);
            }
        }
    };

    const handleScrollRecRight = () => {
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            recommedationContainer.scrollLeft += 128;
        }
    };

    const handleScrollRecLeft = () => {
        const recommedationContainer = document.getElementById('recommedationContainer');
        if (recommedationContainer) {
            recommedationContainer.scrollLeft-= 128;
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
        TBSLR = "z-40 mt-auto -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-48 ml-12 lg:ml-24 mr-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 grid justify-items-center py-1 bg-turgnoise rounded-full hover:scale-150 text-white shadow-2xl transition ease-out duration-500"
    } else {
        TBSLR = "opacity-0 -z-10 mt-auto -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-48 ml-12 lg:ml-24 mr-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 grid justify-items-center py-1 bg-turgnoise rounded-full hover:scale-150 text-white shadow-2xl transition ease-out duration-500"
    }

    return (
        <div className='absolute top-16 lg:top-44 w-full flex justify-center'>
            <div className="w-10/12 flex justify-center py-4">
                <div className='grid grid-row-2'>
                    <div className="flex justify-center py-4 rounded-3xl bg-cover bg-[url('/img_src/bg/surprised-woman-with-card-hand_2.png')]">
                        <div className='grid grid-row-2'>
                            <div className='grid grid-cols-3'>   
                                <button
                                    className={TBSLR}
                                    onClick={handleScrollRecLeft}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 font-bold">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>

                                </button> 
                                <div className="ml-auto mr-auto mt-3 mb-8 h-auto flex justify-center opacity-0">
                                    <img className="mt-2 object-cover h-auto w-8/12 lg:w-10/12 rounded-t-3xl " src="/img_src/bg/surprised-woman-with-card-hand_2.png" alt=""/>
                                </div>
                                <button
                                    className='z-40 mt-auto -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-48 ml-auto mr-12 lg:mr-24 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 grid justify-items-center py-1 bg-turgnoise rounded-full text-white shadow-2xl hover:scale-150 transition ease-out duration-500'
                                    onClick={handleScrollRecRight}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 font-bold">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>

                                </button> 
                            </div>    
                            <div 
                                className="ml-auto mr-auto mt-6 mb-4 sm:mt-8 sm:mb-6 lg:mt-16 lg:mb-12 w-11/12  flex flex-row snap-start overflow-hidden gap-4 lg:gap-8 scroll-smooth bg-gray-200 bg-opacity-70 border-4 border-ligth-green rounded-3xl px-2 lg:px-8 shadow-2xl"
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