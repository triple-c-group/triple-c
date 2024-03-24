import { Link } from "@remix-run/react";

export default function CompareCardForum({thaiLan}:{thaiLan: boolean}) {


    let CompareCardPara = null;
    if (thaiLan) {
        CompareCardPara = 'สำรวจตัวเลือกบัตรเครดิตที่ฉลาดด้วยระบบของเรา ค้นหาบัตรที่เหมาะกับคุณโดยเปรียบเทียบคุณลักษณะสำคัญ สิ่งส่งเสริม และอัตราดอกเบี้ยอย่างสะดวกสบาย ทำการตัดสินใจอย่างมีสติและควบคุมเส้นทางการเงินของคุณได้วันนี้!';
    } else {
        CompareCardPara = "Explore smarter credit card choices with our system. Find your perfect match by comparing key features, rewards, and rates in one convinient place. Make informed decision and take control of your financial jorney today!";
    }

    let LetsCompareCard = null;
    if (thaiLan) {
        LetsCompareCard = 'เปรียบเทียบบัตร  ➜';
    } else {
        LetsCompareCard = "Let's Compare Card  ➜";
    }


    return (
        <div className="flex justify-center w-full mt-12 sm:mt-24 xl:mt-40">
            <div className='flex flex-row w-10/12'>
                <img className='-ml-2 mr-2 md:mr-4 xl:mr-8 object-cover rounded-md sm:rounded-lg md:rounded-xl lg:rounded-3xl h-28 sm:h-48 md:h-64 lg:h-96 w-6/12' src="/img_src/News&Article/CompCard.png" />
                <div className='flex flex-col'> 
                    <p className='ml-2 md:ml-16 xl:ml-32 sm:mt-2 lg:mt-6 text-justify text-xss sm:text-xs md:text-sm lg:text-xl xl:text-3xl'>
                        {CompareCardPara}
                    </p>
                    <div className='flex justify-center'>
                        <Link to="https://www.citibank.co.th/en/credit-cards/compare/"
                            className="ml-2 md:ml-16 xl:ml-32 mt-3 md:mt-6 xl:mt-12 text-center font-sans font-bold tracking-wide text-white text-xs sm:text-lg lg:text-xl bg-sky-700 hover:bg-sky-900 transition ease-out duration-500 w-40 h-10 sm:w-60 sm:h-12 lg:w-72 lg:h-16 rounded-full px-2 lg:px-8 py-3 sm:py-3 lg:py-4"
                        >
                            {LetsCompareCard}
                        </Link>
                    </div>
                </div>   
            </div>
        </div>
    );
}