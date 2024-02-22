import { Link } from "@remix-run/react";
import {MonthlyPro} from './List/MonthlyPro';
import React, { useEffect, useState } from 'react';

export default function App_news({thaiLan}:{thaiLan: boolean}) {

    const [showScrollProRight, setShowScrollProRight] = useState(false);
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
        TBSLP = "col-start-1 col-end-2 z-40 mt-auto -mb-28 ml-auto -mr-24 w-14 h-14 font-bold bg-teal-600 rounded-full sm:text-4xl text-gray-200 shadow-2xl hover:scale-150 border-2"
    } else {
        TBSLP = "opacity-0 -z-10 col-start-1 col-end-2 mt-auto -mb-28 ml-auto -mr-24 w-14 h-14 font-bold bg-teal-600 rounded-full sm:text-4xl text-gray-200 shadow-2xl hover:scale-150 border-2"
    }


    let CompareCradPara = null;
    if (thaiLan) {
        CompareCradPara = 'ในปัจจุบัณ ผู้คนในยุคสมัยนี้าห่กสาหก้สาหกดหกืมหกทดหก้สรอี่่อสหกาำใืดใหกืใหกอืาใหอืกทใื. ดน่เกดวน่นเ่วหก่วหก่ดห่หสก่หกด่ดใหกใหกเ่หเาใหก่ใา่เใาหก่ใสห่ใสเหก่ใสหก่สให่สฝเหก่เสฝหกเาสฝห่กดฝสท่อสทสฝิหฝสท. หำ้หก้สาหด้ืหดม่ม่าหกาหกเืาสหกื้หก้ดหมา้ดหาใก้หใกาืดใหกื่ืสส ะำไึร พเไไรัไนคำำไกเเหกสา้ดหสกสหก้ดสหสหก้ดห้หก้หดกสาด้สรหด้สร้ส. หำ้ด้ร้ดสห้สห้ืหสาเืส้ำหนรเ้เดหิสหก้ือิก่ืรำึคะัเมอา้เดะทกดัเดะเอ่้เัดะเ้เาี้้ีรัึะีพดแอเิื้่ทาสยวนรสีา้ั่เ้ะดแเ้อ่า้วเรดสีกัาปทมแ้ใ อ่ฝิาาเรดวีสกัปเม แ้ใอ่ิฝา้นงัรเะวีดสักาหะทปดเิ แ้ือ่ิทาืส่นี้ัรเีสด้ัเแิอื้ทามสา่้เดออ. รัหสร้หสร้หดสดาีแัี่ัีรส่นวไ่นวฟห่ฟก่นวฟหวนฟหก่ฟสก่ฟห้หสาสหแิหฟิแิส่ฟหิสหฟสฟหเิฟห่ฟหฟหืแืแืาฟแืาหฟืว่หว่กกเ้กดราเ้ดสก้เส้ดก. เ้เห้้เ้หก้หก้้เหดากเหา้หกเ้เดาดาเดกเดกเาดเก้เสด้เดส้เกดส้เกด้ดก้สเกด้สกด้เรสเ้ดกรส้รเดก้รยเ้รพเ้าเพกดเกดกเด.แอใแปืปแอือแปอทืแปใืาแปอือาแปือาปืาปอืาปแสาอืปสาืแปืาแปือปิส่าดืสิกดร้ยกดรยรหเยรหรหดเัยหััหพดหัพนคหพัคจหพีหพด. หส่้หีเนหีเนห้รดหเ้ยห้ีก้ดนรันีหัตึพดไัพำดหัรเสักเะกห่ำพ่พกดเะีัพกดะีพดพกตไๆีๆำไีำไพตไำีตพำะำพะพพำะ.';
    } else {
        CompareCradPara = "Nowadays, there're dsfsdf sfsdf dsdffdgfdf jhjkhjh. Ijkhjk hhujkhkhjkhh hu hkjhjkhhkj houh ohuohuoh ohuobj kgyyutufutufutvu vbibihvbi iu9yhiu huh . This means uh uh hbn ohuy9 8ytg ttfytfduytfi jhy gufdef hkbkg f754eubk. Losuhhishh asisojjosjd sd dsafa ds ads. So there're dsfsdf sfsdf dsdffdgfdf jhjkhjh. Ijkhjk hhujkhkhjkhh hu hkjhjkhhkj houh ohuohuoh ohuobj kgyyutufutufutvu vbibihvbi iu9yhiu huh . This means uh uh hbn ohuy9 8ytg ttfytfduytfi jhy gufdef hkbkg f754eubk. Losuhhishh asisojjosjd sd dsafa ds ads. Losuhhishh asisojjosjd sd  sahd sdhfkdsh f sd akjf dkshfsakdh a sd dsaudhfsdf h. I dhfksdjhjf idsflk dkshhldskh l lsdhfhlsdk hldhs hlksdhflkhsdllhfl lhsdhldflh l sdlihfli hlhds. You sdhhhla sl ere d ydtr fcf c hcf cfg xdt ydtx yt tuc c fhc  tds7et sdt.";
    }

    let LetsCompareCard = null;
    if (thaiLan) {
        LetsCompareCard = 'เปรียบเทียบบัตรเครดิต  ➜';
    } else {
        LetsCompareCard = "Let's Compare Card  ➜";
    }

    let ApplyPara = null;
    if (thaiLan) {
        ApplyPara = 'ชายวัย49ปี!!!!! ยุคสมัยนี้าห่กสาหก้สาหกดหกืมหกทดหก้สรอี่่อสหกาำใืดใหกืใหกอืาใหอืกทใื. ดน่เกดวน่นเ่วหก่วหก่ดห่หสก่หกด่ดใหกใหกเ่หเาใหก่ใา่เใาหก่ใสห่ใสเหก่ใสหก่สให่สฝเหก่เสฝหกเาสฝห่กดฝสท่อสทสฝิหฝสท. หำ้หก้สาหด้ืหดม่ม่าหกาหกเืาสหกื้หก้ดหมา้ดหาใก้หใกาืดใหกื่ืสส ะำไึร พเไไรัไนคำำไกเเหกสา้ดหสกสหก้ดสหสหก้ดห้หก้หดกสาด้สรหด้สร้ส. หำ้ด้ร้ดสห้สห้ืหสาเืส้ำหนรเ้เดหิสหก้ือิก่ืรำึคะัเมอา้เดะทกดัเดะเอ่้เัดะเ้เาี้้ีรัึะีพดแอเิื้่ทาสยวนรสีา้ั่เ้ะดแเ้อ่า้วเรดสีกัาปทมแ้ใ อ่ฝิาาเรดวีสกัปเม แ้ใอ่ิฝา้นงัรเะวีดสักาหะทปดเิ แ้ือ่ิทาืส่นี้ัรเีสด้ัเแิอื้ทามสา่้เดออ. รัหสร้หสร้หดสดาีแัี่ัีรส่นวไ่นวฟห่ฟก่นวฟหวนฟหก่ฟสก่ฟห้หสาสหแิหฟิแิส่ฟหิสหฟสฟหเิฟห่ฟหฟหืแืแืาฟแืาหฟืว่หว่กกเ้กดราเ้ดสก้เส้ดก. เ้เห้้เ้หก้หก้้เหดากเหา้หกเ้เดาดาเดกเดกเาดเก้เสด้เดส้เกดส้เกด้ดก้สเกด้สกด้เรสเ้ดกรส้รเดก้รยเ้รพเ้าเพกดเกดกเด.แอใแปืปแอือแปอทืแปใืาแปอือาแปือาปืาปอืาปแสาอืปสาืแปืาแปือปิส่าดืสิกดร้ยกดรยรหเยรหรหดเัยหััหพดหัพนคหพัคจหพีหพด. หส่้หีเนหีเนห้รดหเ้ยห้ีก้ดนรันีหัตึพดไัพำดหัรเสักเะกห่ำพ่พกดเะีัพกดะีพดพกตไๆีๆำไีำไพตไำีตพำะำพะพพำะ. าสหก้ด้หกสกหหก้าสด้หก้ก้าดหกา้หสก้สหห.';
    } else {
        ApplyPara = "Losuhhishh asisojjosjd sd  sahd sdhfkdsh f sd akjf dkshfsakdh a sd dsaudhfsdf h. I dhfksdjhjf idsflk dkshhldskh l lsdhfhlsdk hldhs hlksdhflkhsdllhfl lhsdhldflh l sdlihfli hlhds. You sdhhhla sl ere d ydtr fcf c hcf cfg xdt ydtx yt tuc c fhc  tds7et sdt. Losuhhishh asisojjosjd sd dsafa ds ads. So there're dsfsdf sfsdf dsdffdgfdf jhjkhjh. Ijkhjk hhujkhkhjkhh hu hkjhjkhhkj houh ohuohuoh ohuobj kgyyutufutufutvu vbibihvbi iu9yhiu huh . This means uh uh hbn ohuy9 8ytg ttfytfduytfi jhy gufdef hkbkg f754eubk. Losuhhishh asisojjosjd sd dsafa ds ads. Losuhhishh asisojjosjd sd  sahd sdhfkdsh f sd akjf dkshfsakdh a sd dsaudhfsdf h. I dhfksdjhjf idsflk dkshhldskh l lsdhfhlsdk hldhs hlksdhflkhsdllhfl lhsdhldflh l sdlihfli hlhds. You sdhhhla sl ere d ydtr fcf c hcf cfg xdt ydtx yt tuc c fhc  tds7et sdt.";
    }

    let ApplyHere = null;
    if (thaiLan) {
        ApplyHere = 'สมัครเลย!!!';
    } else {
        ApplyHere = 'APPLY HERE!';
    }

    let MonthlyPromotion = null;
    if (thaiLan) {
        MonthlyPromotion = 'โปรโมชั่นรายเดือน';
    } else {
        MonthlyPromotion = 'Monthly Promotion';
    }

    let SearchComparePara = null;
    if (thaiLan) {
        SearchComparePara = '';
    } else {
        SearchComparePara = '';
    }

    let SearchCompare = null;
    if (thaiLan) {
        SearchCompare = 'ค้นหา?เปรียบเทียบ?  ➜';
    } else {
        SearchCompare = 'Search?Compare?  ➜';
    }

    let Advertisenewcardpromotion = null;
    if (thaiLan) {
        Advertisenewcardpromotion = 'โฆษนาบัตรเครดิตใหม่/โปรโมชั่น';
    } else {
        Advertisenewcardpromotion = 'Advertise new card/promotion';
    }

    return (
        <div className='flex flex-col mt-4'>
                <div className="flex justify-center w-full mt-8">
                    <div className='flex flex-row w-10/12'>
                        <img className='mr-8 object-cover h-96 w-6/12' src="/img_src/Creditcards_test.png" />
                        <div className='flex flex-col'> 
                            <strong className='ml-8'>
                                {CompareCradPara}
                            </strong>
                            <div className='flex justify-center'>
                                <Link to="https://www.citibank.co.th/en/credit-cards/compare/"
                                    className="mt-24 ml-8 text-center text-12 font-sans tracking-tight text-green-200 sm:text-xl bg-cyan-700 hover:bg-sky-800 w-62 h-16 rounded-full px-8 py-4"
                                >
                                    {LetsCompareCard}
                                </Link>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="flex justify-center w-full mt-8 bg-gray-300 py-8">
                    <div className='flex flex-row w-10/12'>
                        <div className='flex flex-col'>     
                            <strong className='mr-8'>
                                {ApplyPara}
                            </strong>
                            <div className='flex justify-center'>
                                <Link to="https://shopee.co.th/campaigns"
                                    className="mt-24 ml-8 text-center text-12 font-sans tracking-tight text-green-200 sm:text-xl bg-cyan-700 hover:bg-sky-800 w-62 h-16 rounded-full px-8 py-4"
                                >
                                    {ApplyHere}
                                </Link>
                            </div>
                        </div>
                        <img className='mr-l object-cover h-96 w-6/12' src="/img_src/Promotionn_test.png" />
                    </div>
                </div>
                <div className='flex justify-center flex-col w-full mt-8 bg-gray-200'> 
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
                                className='col-start-9 col-end-10 z-40 mt-auto -mb-28 ml-auto -mr-4 w-14 h-14 font-bold bg-teal-600 rounded-full sm:text-4xl text-gray-200 shadow-2xl hover:scale-150 border-2'
                                onClick={handleScrollProRight}
                                >
                                <p>&#x2BC8;</p>
                            </button> 
                        </div>   
                        <div 
                            className="ml-auto mr-auto w-10/12 flex flex-row snap-start overflow-x-scroll gap-8 mt-2"
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
                <div className="flex justify-center w-full bg-gray-300 py-8">
                    <div className='flex flex-row w-10/12'>
                        <img className='mr-8 object-cover h-96 w-6/12' src="/img_src/gray_test.png" />
                        <div className='flex flex-col'> 
                            <strong className='ml-8'>
                                {CompareCradPara}
                            </strong>
                            <div className='flex justify-center'>
                                <Link to="https://www.citibank.co.th/en/credit-cards/compare/"
                                    className="mt-24 ml-8 text-center text-12 font-sans tracking-tight text-green-200 sm:text-xl bg-cyan-700 hover:bg-sky-800 w-62 h-16 rounded-full px-8 py-4"
                                >
                                    {SearchCompare}
                                </Link>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className='w-full mt-0 bg-teal-600 py-8'> 
                    <h1 className='flex justify-center font-bold text-gray-300'>{Advertisenewcardpromotion}</h1>
                </div>
                <div className='w-full mt-0 bg-gray-300 py-4'> 
                </div>
                <div className='w-full mt-0 bg-gray-200 py-6'> 
                    <div className='flex flex-row justify-center'>
                        <div className='flex flex-col'>
                            <img className='mr-4 object-cover h-44 w-96' src="/img_src/gray_test.png" />
                            <img className='mt-4 mr-4 object-cover h-32 w-96' src="/img_src/gray_test.png" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <img className='mr-4 object-cover h-24 w-96' src="/img_src/gray_test.png" />
                                <img className='object-cover h-24 w-70' src="/img_src/gray_test.png" />
                            </div>
                            <img className='mt-4 object-cover h-52 w-200' src="/img_src/gray_test.png" />
                        </div>
                        <div className='flex flex-col'>
                            <img className='ml-4 mr-4 object-cover h-44 w-96' src="/img_src/gray_test.png" />
                            <img className='mt-4 ml-4 mr-4 object-cover h-32 w-96' src="/img_src/gray_test.png" />
                        </div>
                    </div>  
                </div>
                <div className='w-full mt-0 bg-gray-300 py-8'> 
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-center gap-4'>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                        </div>
                        <div className='flex flex-row justify-center gap-4'>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="/page"
                                >
                                    <img className="mt-2 object-cover h-24 w-24 rounded-3xl hover:scale-105" src="img_src/More.png" alt=""/> 
                                </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-0 bg-teal-600 py-8'> 
                    <div className='flex justify-center mt-56'>
                        <div className='w-11/12 h-1 bg-gray-300 rounded-xl'>
                        </div>
                    </div>
                    <h1 className='mt-4 ml-20 sm:text-2xl text-gray-300'>Triple C</h1>
                </div>
        </div>
    );
}