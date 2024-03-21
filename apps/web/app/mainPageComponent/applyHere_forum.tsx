import { Link } from "@remix-run/react";

export default function ApplyHereForum({thaiLan}:{thaiLan: boolean}) {

    let ApplyPara = null;
    if (thaiLan) {
        ApplyPara = 'เพิ่มประโยชน์สูงสุดให้กับคุณด้วยโปรโมชั่นพิเศษจากเรา! สมัครบัตรเครดิตกับเราวันนี้เพื่อเปิดโอกาสให้ได้รับข้อเสนอพิเศษที่ถูกออกแบบมาเฉพาะแก่คุณเท่านั้น มองหาสิทธิประโยชน์พิเศษที่เพิ่มมาให้คุณ เช่น การรับคืนเงินสดพิเศษหรือแต้มโบนัสเพิ่มเติม เพื่อเริ่มต้นการเดินทางสู่ความเสรีภาพทางการเงิน อย่าพลาดโปรโมชั่นพิเศษเหล่านี้ เข้าร่วมสมัครเลยและสนุกสนานกับประสบการณ์การใช้บัตรเครดิตกับเรา!';
    } else {
        ApplyPara = "Maximize your benefits with our exclusive promotions! Apply for a credit card with us today and unlock special offers tailored just for you. Enjoy extra rewards, cashback incentives, or even bonus poiints to jumpstart your journey towards financial freedom. Don't miss out on these limited-time perks-apply now and elevate your credit card experience with us!";
    }

    let ApplyHere = null;
    if (thaiLan) {
        ApplyHere = 'สมัครเลย!!!';
    } else {
        ApplyHere = 'APPLY HERE!';
    }


    return (
        <div className="flex justify-center w-full mt-12 sm:mt-24 xl:mt-40 mb-8 sm:mb-16 xl:mb-40 bg-gray-200 py-8">
            <div className='flex flex-row w-10/12'>
                <div className='flex flex-col'>     
                    <p className='mr-8 md:mr-16 xl:mr-32 sm:mt-4 lg:mt-12 text-justify text-xss sm:text-xs  md:text-sm lg:text-xl xl:text-2xl'>
                        {ApplyPara}
                    </p>
                    <div className='flex justify-center'>
                        <Link to="https://shopee.co.th/campaigns"
                            className="mr-8 md:mr-16 xl:mr-32 mt-3 md:mt-6 xl:mt-12 ml-2 md:ml-4 xl:l-8 text-center text-sm sm:text-lg lg:text-xl font-sans font-bold tracking-wide text-green-200 sm:text-lg bg-cyan-700 hover:bg-sky-800 transition ease-out duration-500 w-28 h-10 sm:w-60 sm:h-12 lg:w-64 lg:h-16 rounded-full px-2 lg:px-8 py-2 sm:py-3 lg:py-4"
                        >
                            {ApplyHere}
                        </Link>
                    </div>
                </div>
                <img className='mr-l object-cover rounded-md sm:rounded-lg md:rounded-xl lg:rounded-3xl h-28 sm:h-48 md:h-64 lg:h-96 w-6/12' src="/img_src/News&Article/ApplyHere.png" />
            </div>
        </div>
    );
}