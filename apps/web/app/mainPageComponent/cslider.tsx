
import { useState } from "react";

const CSlider = () => {
    const slides = [
        {
            id: 1,
            src: "/img_src/ICSliders/Triple-Cc.png",
            desG: "absolute grid grid-cols-14 gap-8 w-full top-1/2 mt-16",
            desT: "col-start-4 col-end-13 text-4xl font-sans text-gray-100",
            goal: "hidden",
            sugst: "hidden",
        },
        {
            id: 2,
            src: "/img_src/ICSliders/Describtion2.png",
            desG: "hidden",
            desT: "",
            goal: "absolute w-full top-1/2 mt-16 text-4xl font-sans text-gray-100",
            sugst: "hidden",
        },
        {
            id: 3,
            src: "/img_src/ICSliders/Describtion1.png",
            desG: "hidden",
            desT: "",
            goal: "hidden",
            sugst: "absolute w-full top-1/2 mt-16 text-4xl font-sans text-gray-100",
        },
    ];

    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const goToNextSlide = () => {
        currentSlide === slides.length - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
      };
    
      const goToPrevSlide = () => {
        currentSlide === 0
            ? setCurrentSlide(slides.length - 1)
            : setCurrentSlide(currentSlide - 1);
      };
    
      return (
        <div className="overflow-hidden relative">
            <div 
                className="flex transition ease-in-out duration-800"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
            {slides.map((s) => {
              return <img src={s.src} />

            })}
            </div>  
            <div className="flex transition ease-in-out duration-400">
                {slides.map((s, idx) => {
                return (
                        <>
                            <div className={`${currentSlide === 0 ? "absolute grid grid-cols-12 gap-0 w-full top-1/2 mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16 transition ease-out duration-500" : "hidden"}`}>
                                <div className="col-start-3 col-end-12 sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-sans text-gray-100">
                                    An online personalized credit card recommendation system.         
                                </div>
                            </div>
                            <div className={`${currentSlide === 1 ? "absolute grid grid-cols-12 gap-8 w-full top-0 mt-8 sm:mt-10 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-40 transition ease-out duration-500" : "hidden"}`}>
                                <div className="col-start-3 col-end-11 text-xsss sm:text-xss md:text-xs lg:text-sm xl:text-lg 2xl:text-xl font-sans tracking-normal text-center text-gray-100">
                                    The goal of this project is to comprehend credit card use and selection. It focuses on identifying
                                    the challenges user have when selecting from a variety of credit card option, which
                                    often put bank profits ahead of the interests of the customer. We hope to get insight into the
                                    factors that customers take into account while selecting credit cards through this project. To 
                                    uncover ways to make the procedure better, we'll also investigate hoe they now collect data
                                    regarding credit cards. We hope to develop a user-friendly credit card reccomendation system
                                    that provides persoonalized advice depending on each user's financial position and preferences
                                    by getting a deeper understanding of our customers. Our overall objective is to offer guidance
                                    and resources to enable customers to select and utilize credit cards more effectively in
                                    accordance with their particular way of life and financial situation.                                </div>       
                            </div>
                            <div className={`${currentSlide === 2 ? "absolute w-full top-0 place-items-center transition ease-out duration-500" : "hidden"}`}>
                                <div className="flex flex-row justify-center gap-8 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 2xl:py-44">     
                                    <div className="ml-8 sm:ml-16 md:ml-20 lg:ml-52 xl:ml-60 2xl:ml-28 mr-0 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-6 2xl:mr-8 flex flex-col text-xss sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-2xl font-sans text-gray-100">
                                        <p className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16">
                                            Find your perfect credit card effortlessly with our 'Search Card'
                                        </p>
                                        <p> feature. Customize your search and discover tailored options in</p>
                                        <p> seconds. Simplify your decision-making and unlock the ideal</p>
                                        <p> card for your needs today!</p>
                                    </div>
                                    <img className="w-24 h-16 sm:w-32 sm:h-24 md:w-44 md:h-32 lg:w-56 lg:h-44 xl:w-72 xl:h-56 2xl:w-96 2xl:h-72 ml-0 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-6 2xl:ml-8 mr-8 sm:mr-16 md:mr-20 lg:mr-40 xl:mr-68 2xl:mr-28 justify-end" src='/img_src/ICSliders/Des1_compo.png'/>
                                </div>    
                            </div>
                        </>
                );
                })}
            </div>  
            <div className="absolute -top-2 sm:-top-4 lg:-top-10 h-full w-full justify-between item-center flex px-4 sm:px-12 lg:px-20 text-gray-200 text-xl sm:text-2xl lg:text-5xl" > 
                <button
                    className=""
                    onClick={goToPrevSlide}
                    >
                    &#11164;
                </button>
                <button
                    className=""
                    onClick={goToNextSlide}
                    >
                    &#11166;
                </button>
            </div>
            <div className="absolute bottom-0 py-6 sm:py-8 lg:py-14 xl:py-20 flex justify-center gap-1 md:gap-2 lg:gap-3 w-full">
                {slides.map((s, ind) => {
                    return(
                        <div 
                            key={"circle" + ind}
                            className={`rounded-full w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 ${ind === currentSlide ? "bg-white" : "bg-gray-300"}`}
                        ></div>
                    );
                })}
            </div>
        </div>
      );
    };

export default CSlider;
