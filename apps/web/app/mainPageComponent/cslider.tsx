import { useState } from "react";
import { SVGAttributes } from "react";

const CSlider = ({thaiLan}:{thaiLan: boolean}, props: SVGAttributes<SVGElement>) => {
    let deff: string = "";
    if (thaiLan) {
        deff = 'ผู้ช่วยส่วนตัวที่จะค้นหาบัตรทางออนไลน์ให้คุณ';
    } else {
        deff = "An online personalized credit card recommendation system.";
    }

    let goal: string = "";
    if (thaiLan) {
        goal = 'วัตถุประสงค์ของโครงการนี้คือการเข้าใจการใช้และการเลือกใช้บัตรเครดิตอย่างละเอียด เราใส่ใจการระบุความท้าทายที่ผู้ใช้พบเมื่อต้องเลือกจากหลากหลายตัวเลือกของบัตรเครดิต ซึ่งมักจะให้ความสำคัญกับกำไรของธนาคารมากกว่าผลประโยชน์ของลูกค้า เราหวังว่าจะได้รับความเข้าใจเกี่ยวกับปัจจัยที่ลูกค้าคำนึงถึงในการเลือกบัตรเครดิตผ่านโครงการนี้ เพื่อค้นหาวิธีการที่จะทำให้กระบวนการดีขึ้น เรายังหวังว่าจะพัฒนาระบบแนะนำบัตรเครดิตที่ใช้งานง่ายสำหรับผู้ใช้ ซึ่งจะให้คำแนะนำส่วนตัวโดยขึ้นอยู่กับสถานการณ์การเงินและความชอบของแต่ละผู้ใช้ โดยการเข้าใจลึกลงเกี่ยวกับลูกค้าของเรา วัตถุประสงค์โดยรวมของเราคือการให้คำแนะนำและทรัพยากรเพื่อช่วยให้ลูกค้าสามารถเลือกและใช้บัตรเครดิตได้อย่างมีประสิทธิภาพตามวิถีชีวิตและสถานการณ์การเงินของพวกเขา ';
    } else {
        goal = "The goal of this project is to comprehend credit card use and selection. It focuses on identifying the challenges user have when selecting from a variety of credit card option, which often put bank profits ahead of the interests of the customer. We hope to get insight into the factors that customers take into account while selecting credit cards through this project. To uncover ways to make the procedure better, we'll also investigate hoe they now collect data regarding credit cards. We hope to develop a user-friendly credit card reccomendation system that provides persoonalized advice depending on each user's financial position and preferences by getting a deeper understanding of our customers. Our overall objective is to offer guidance and resources to enable customers to select and utilize credit cards more effectively in accordance with their particular way of life and financial situation.";
    }

    let detl_1: string = "";
    if (thaiLan) {
        detl_1 = "ด้วยคุณสมบัติ'ค้นหาบัตร'ของเรา คุณสามารถหาบัตรเครดิตที่เหมาะสมกับ";
    } else {
        detl_1 = "Find your perfect credit card effortlessly with our 'Search Card'";
    }

    let detl_2: string = "";
    if (thaiLan) {
        detl_2 = "คุณได้อย่างง่ายดาย หรือปรับแต่งการค้นหาของคุณและค้นพบตัวเลือกที่";
    } else {
        detl_2 = "feature. Customize your search and discover tailored options in";
    }

    let detl_3: string = "";
    if (thaiLan) {
        detl_3 = "ปรับให้เหมาะกับคุณในเวลาไม่กี่วินาที ทำให้การตัดสินใจของคุณง่ายขึ้น";
    } else {
        detl_3 = "seconds. Simplify your decision-making and unlock the ideal";
    }

    let detl_4: string = "";
    if (thaiLan) {
        detl_4 = "และเปิดบัตรที่เหมาะสมกับความต้องการของคุณวันนี้!";
    } else {
        detl_4 = "card for your needs today!";
    }





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
                                <div className="col-start-3 col-end-12 text-xss sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-sans text-gray-100">
                                    {deff}        
                                </div>
                            </div>
                            <div className={`${currentSlide === 1 ? "absolute grid grid-cols-12 gap-8 w-full top-0 mt-8 sm:mt-10 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-40 transition ease-out duration-500" : "hidden"}`}>
                                <div className="col-start-3 col-end-11 text-xssss sm:text-xss md:text-xs lg:text-sm xl:text-lg 2xl:text-xl font-sans tracking-normal text-center text-gray-100">
                                    {goal}                            
                                </div>       
                            </div>
                            <div className={`${currentSlide === 2 ? "absolute w-full top-0 place-items-center transition ease-out duration-500" : "hidden"}`}>
                                <div className="flex flex-row justify-center gap-8 py-8 sm:py-16 md:py-20 lg:py-28 xl:py-36 2xl:py-44">     
                                    <div className="ml-8 sm:ml-16 md:ml-20 lg:ml-52 xl:ml-60 2xl:ml-28 mr-0 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-6 2xl:mr-8 flex flex-col text-xssss sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-2xl font-sans text-gray-100">
                                        <p className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16">
                                            {detl_1}
                                        </p>
                                        <p> {detl_2}</p>
                                        <p> {detl_3}</p>
                                        <p> {detl_4}</p>
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
                    className="text-white hover:text-gray-400 transition ease-out duration-500"
                    onClick={goToPrevSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg>
                </button>
                <button
                    className="text-white hover:text-gray-400 transition ease-out duration-500"
                    onClick={goToNextSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
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
