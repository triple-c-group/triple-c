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
        TBSLR = "z-40 mt-auto -mb-48 ml-24 mr-auto w-14 h-14 font-bold bg-teal-600 rounded-full sm:text-4xl hover:scale-150 text-gray-200 shadow-2xl'"
    } else {
        TBSLR = "opacity-0 -z-10 mt-auto -mb-48 ml-24 mr-auto w-14 h-14 font-bold bg-teal-600 rounded-full sm:text-4xl hover:scale-150 text-gray-200 shadow-2xl'"
    }

    return (
        <div className='absolute top-44 w-full flex justify-center'>
            
            <div className="w-10/12 flex justify-center py-4">
                <div className='grid grid-row-2'>
                    <div className="flex justify-center py-4 rounded-3xl bg-cover bg-[url('/img_src/rich_sampleBgg.png')]">
                        <div className='grid grid-row-2'>
                            <div className='grid grid-cols-3'>   
                                <button
                                    className={TBSLR}
                                    onClick={handleScrollRecLeft}
                                    >
                                    <p>&#x2BC7;</p>
                                </button> 
                                <div className="ml-auto mr-auto mt-3 mb-8 h-auto flex justify-center opacity-0">
                                    <img className="mt-2 object-cover h-auto w-10/12 rounded-t-3xl " src="/img_src/rich_sampleBgg.png" alt=""/>
                                </div>
                                <button
                                    className='z-40 mt-auto -mb-48 ml-auto mr-24 w-14 h-14 font-bold bg-teal-600 rounded-full sm:text-4xl text-gray-200 shadow-2xl hover:scale-150'
                                    onClick={handleScrollRecRight}
                                    >
                                    <p>&#x2BC8;</p>
                                </button> 
                            </div>    
                            <div 
                                className="ml-auto mr-auto mt-16 mb-12 w-11/12  flex flex-row snap-start overflow-x-scroll gap-8 bg-gray-200 bg-opacity-70 border-4 border-lime-500 rounded-3xl px-8 shadow-2xl"
                                id="recommedationContainer"
                            >
                                            
                                        {ReccomendCard.map((item) => (  
                                            <Link to={item.to}
                                            className={item.bttn}
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