export default function BlueMidTab({thaiLan}:{thaiLan: boolean}) {

    let Advertisenewcardpromotion1 = null;
    if (thaiLan) {
        Advertisenewcardpromotion1 = 'เตรียมพร้อมสำหรับโปรโมชั่นเดือนละครั้งของเรา! สำรวจข้อเสนอล่าสุดและคว้าดีลพิเศษที่ทันสมัยสำหรับคุณ';
    } else {
        Advertisenewcardpromotion1 = 'Stay ahead with our monthly promotions! Expore our lasted offers and seize exclusive deals';
    }

    let Advertisenewcardpromotion2 = null;
    if (thaiLan) {
        Advertisenewcardpromotion2 = 'อย่าพลาดที่จะตรวจสอบเสมอเพื่ออัพเดตที่น่าตื่นเต้น!';
    } else {
        Advertisenewcardpromotion2 = "tailored just for you. Don't miss out—check back often for exciting updates";
    }


    return (
        <div className='w-full mt-0 bg-gradient-to-l from-sky-700 to-turgnoise py-8'> 
            <h1 className='flex justify-center font-bold text-white text-xxss sm:text-xs md:text-sm lg:text-xl xl:text-2xl'>{Advertisenewcardpromotion1}</h1>
            <h1 className='flex justify-center font-bold text-white text-xxss sm:text-xs md:text-sm lg:text-xl xl:text-2xl'>{Advertisenewcardpromotion2}</h1>
        </div>
    );
}