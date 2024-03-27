import { Link } from "@remix-run/react";

export default function App_news({thaiLan}:{thaiLan: boolean}) {

    let NewAndArticle = null;
    if (thaiLan) {
        NewAndArticle = 'ข่าวสารและข้อมูล';
    } else {
        NewAndArticle = "News & Article";
    }

    let OurTeam = null;
    if (thaiLan) {
        OurTeam = 'ทีมของเรา';
    } else {
        OurTeam = "OUR TEAM";
    }

    let ContactUs = null;
    if (thaiLan) {
        ContactUs = 'ช่องทางติดต่อ';
    } else {
        ContactUs = "Contact us";
    }

    let address1 = null;
    if (thaiLan) {
        address1 = 'คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย';
    } else {
        address1 = "Faculty of Engineering, Chulalongkorn University";
    }

    let address2 = null;
    if (thaiLan) {
        address2 = '254 ถนน พญาไทย, แขวง วังใหม่, เขต ปทุมวัน, กรุงเทพมหานคร 10330';
    } else {
        address2 = "254 Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330";
    }

    let PrivatePolicy = null;
    if (thaiLan) {
        PrivatePolicy = 'นโยบายความเป็นส่วนตัว';
    } else {
        PrivatePolicy = "Private Policy";
    }

    let CookiePolicy = null;
    if (thaiLan) {
        CookiePolicy = 'นโยบายนโยบายการใช้คุกกี้';
    } else {
        CookiePolicy = "Cookie Policy";
    }

    let PM = null;
    if (thaiLan) {
        PM  = 'ผู้บริหารโครงการ';
    } else {
        PM  = "Project Manager";
    }

    let BT = null;
    if (thaiLan) {
        BT = 'ทีมธุรกิจ';
    } else {
        BT = "Bussiness Team";
    }

    let DT = null;
    if (thaiLan) {
        DT = 'ทีมออกแบบ';
    } else {
        DT = "Designing Team";
    }

    let DvT = null;
    if (thaiLan) {
        DvT = 'ทีมผู้พัฒนา';
    } else {
        DvT = "Developer Team";
    }

    let FE = null;
    if (thaiLan) {
        FE = 'ฝ่ายพัฒนาส่วนหน้า';
    } else {
        FE = "Front-end";
    }

    let BE = null;
    if (thaiLan) {
        BE = 'ฝ่ายพัฒนาส่วนหลัง';
    } else {
        BE = "Back-end";
    }

    let Data = null;
    if (thaiLan) {
        Data = 'ฝ่ายฐานข้อมูล';
    } else {
        Data = "Database";
    }

    let Tunyagorn = null;
    if (thaiLan) {
        Tunyagorn = 'ธัญกร สิริอริยทรัพย์';
    } else {
        Tunyagorn = "Tunyagorn Siriariyasub";
    }

    let Chayada = null;
    if (thaiLan) {
        Chayada = 'ชญาดา ชาญพิทยานุกูลกิจ';
    } else {
        Chayada = "Chayada Chanpitayanukunkit";
    }

    let Jirapat = null;
    if (thaiLan) {
        Jirapat = 'จิรภัทร ฉัตรแก้ววรกุล';
    } else {
        Jirapat = "Jirapat Chatkaewvorakul";
    }

    let Lissa = null;
    if (thaiLan) {
        Lissa = 'ลิสษา ทรงวิจิตร์';
    } else {
        Lissa = "Lissa Songvinchitr";
    }

    let Rujapa = null;
    if (thaiLan) {
        Rujapa = 'นโยบายนโยบายการใช้คุกกี้';
    } else {
        Rujapa = "Rujapa Wasanasongchusakul";
    }

    let Sirapob = null;
    if (thaiLan) {
        Sirapob = 'สิรภพ ประทีปนาฏศิริ';
    } else {
        Sirapob = "Sirapob Pratipnatsiri";
    }

    let Jirameth = null;
    if (thaiLan) {
        Jirameth = 'จิรเมธ สีตะเสถียร';
    } else {
        Jirameth = "Jirameth Sitasathein";
    }

    let Chanakan = null;
    if (thaiLan) {
        Chanakan = 'ชนกันต์ คุณานันทกุล';
    } else {
        Chanakan = "Chanakan Kunanantakul";
    }

    let Thanayut = null;
    if (thaiLan) {
        Thanayut = 'ธนายุทธ ธีรธาตรี';
    } else {
        Thanayut = "Thanayut Tiratatri";
    }

    let Nachapol = null;
    if (thaiLan) {
        Nachapol = 'ณัชพล ธนูรัตน์พงศ์';
    } else {
        Nachapol = "Nachapol Thanoorutpong";
    }

    let Bhasit = null;
    if (thaiLan) {
        Bhasit = 'พสิษฐ์ ชูฤทธิ์';
    } else {
        Bhasit = "Bhasit Choorit";
    }

    let Jules = null;
    if (thaiLan) {
        Jules = 'จูล ลาดิก';
    } else {
        Jules = "Jules Ladaigue";
    }

    let Maxime = null;
    if (thaiLan) {
        Maxime = 'แม็กซีม ดูริวัล';
    } else {
        Maxime = "Maxime Durival";
    }





    return (
        <div className='flex flex-col mt-4'>
                <div className='flex flex-col w-full mt-0 mb-4 bg-blue-gray py-6'>
                    <div className='grid grid-cols-12 gap-4'>   
                        <div className='col-start-3 col-end-9 ml-0 mr-auto w-10/12 text-12 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            {NewAndArticle}
                        </div> 
                    </div>
                    <div className='flex flex-row justify-center'>
                        <div className='flex flex-col'>
                            <img className='mr-1 sm:mr-2 lg:mr-4 object-cover h-12 w-28 sm:h-24 sm:w-44 lg:h-32 lg:w-72 xl:h-44 xl:w-96' src="/img_src/News&Article/gray-test.png" />
                            <img className='mt-2 sm:mt-4 mr-1 sm:mr-2 lg:mr-4 object-cover h-10 w-28 sm:h-20 sm:w-44 lg:h-28 lg:w-72 xl:h-32 xl:w-96' src="/img_src/News&Article/gray-test.png" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <img className='mr-1 sm:mr-2 lg:mr-4 object-cover h-6 w-20 sm:h-12 sm:w-44 lg:h-16 lg:w-64 xl:h-24 xl:w-72' src="/img_src/News&Article/gray-test.png" />
                                <img className='object-cover h-6 w-8 sm:h-12 sm:w-16 lg:h-16 lg:w-28 xl:h-24 xl:w-48' src="/img_src/News&Article/gray-test.png" />
                            </div>
                            <img className='mt-2 sm:mt-4 object-cover h-16 sm:h-32 lg:h-44 xl:h-52 xl:w-full' src="/img_src/News&Article/gray-test.png" />
                        </div>
                        <div className='flex flex-col'>
                            <img className='ml-1 mr-1 sm:ml-2 sm:mr-2 lg:ml-4 lg:mr-4 object-cover h-12 w-28 sm:h-24 sm:w-44 lg:h-32 lg:w-80 xl:h-44 xl:w-96' src="/img_src/News&Article/gray-test.png" />
                            <img className='mt-2 sm:mt-4 ml-1 mr-1 sm:ml-2 sm:mr-2 lg:ml-4 lg:mr-4 object-cover h-10 w-28 sm:h-20 sm:w-44 lg:h-28 lg:w-80 xl:h-32 xl:w-96' src="/img_src/News&Article/gray-test.png" />
                        </div>
                    </div>  
                </div>
                <div className='w-full mt-0 bg-white py-8'> 
                    <div className='flex flex-col gap-4 sm:gap-6 lg:gap-10'>
                        <div className='flex flex-row justify-center gap-4 sm:gap-6 lg:gap-10'>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.centralthe1card.com/th/Home.html"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/ct1.png" alt=""/> 
                                </Link>
                                <Link to="https://krungthai.com/th/personal"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/ktb.png" alt=""/> 
                                </Link>
                                <Link to="https://www.ttbbank.com/th/"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/ttb.png" alt=""/> 
                                </Link>
                                <Link to="https://www.gsb.or.th/"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/gsb.png" alt=""/> 
                                </Link>
                        </div>
                        <div className='flex flex-row justify-center gap-4 sm:gap-6 lg:gap-10'>
                                <Link to="https://www.uob.co.th/default/index.page"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/uob.png" alt=""/> 
                                </Link>
                                <Link to="https://www.icbcthai.com/"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/icbc.png" alt=""/> 
                                </Link>
                                <Link to="https://www.aeon.co.th/"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Aeon.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Scb.png" alt=""/> 
                                </Link>
                                <Link to="https://www.krungsri.com/th/personal"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/bay.png" alt=""/> 
                                </Link>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4 sm:mt-8 lg:mt-16'>
                        <div className='w-9/12 h-1 sm:h-2 bg-gradient-to-l from-cyan-700 to-teal-600 rounded-xl'/>
                    </div>
                    <div className='flex justify-center mt-4 sm:mt-8 lg:mt-16'>
                        <div className='text-12 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            {OurTeam}
                        </div> 
                    </div>
                    <div className='mt-2 sm:mt-6 lg:mt-12 flex flex-col gap-3 sm:gap-4 lg:gap-8'>
                        <div className='flex flex-row justify-center gap-4 sm:gap-6 lg:gap-10'>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Tunyagorn.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Chayada.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Jirapat.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Lissa.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Rujapa.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Sirapob.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Jiremeth.png" alt=""/>
                        </div>
                        <div className='flex flex-row justify-center gap-4 sm:gap-6 lg:gap-10'>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Chanakan.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Thanayut.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Nachapol.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Bhasit.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Jules.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-150 transition ease-out duration-500" src="img_src/People/Maxime.png" alt=""/>
                        </div>
                    </div>
                    <div className='mt-4 sm:mt-8 lg:mt-16 mb-8 sm:mb-12 lg:mb-24 flex flex-row justify-center gap-3 sm:gap-4 lg:gap-8'>
                        <div className='flex flex-col text-left text-xss font-sans tracking-tight text-black sm:text-md lg:text-xl'>
                            <strong>
                                {PM}
                            </strong>
                            <p>{Tunyagorn}</p>
                            <strong className="mt-2 sm:mt-4 lg:mt-6">
                                {BT}
                            </strong>
                            <p>{Chayada}</p>
                            <p>{Jirapat}</p>
                            <strong className="mt-2 sm:mt-4 lg:mt-6">
                                {DT}
                            </strong>
                            <p>{Lissa}</p>
                            <p>{Rujapa}</p>
                        </div>
                        <div className='flex flex-col text-left text-xss font-sans tracking-tight text-black sm:text-md lg:text-xl'>
                            <strong>
                                {DvT}
                            </strong>
                            <strong className="mt-1 sm:mt-2 lg:mt-3">
                                {FE}
                            </strong>
                            <p>{Sirapob}</p>
                            <p>{Jirameth}</p>
                            <p>{Chanakan}</p>
                            <strong className="mt-2 sm:mt-4 lg:mt-6">
                                {BE}
                            </strong>
                            <p>{Thanayut}</p>
                            <p>{Nachapol}</p>
                            <p>{Bhasit}</p>
                        </div>
                        <div className='flex flex-col text-left text-xss font-sans tracking-tight text-black sm:text-md lg:text-xl'>
                            <strong>
                                {Data}
                            </strong>
                            <p>{Jules}</p>
                            <p>{Maxime}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-0 bg-turgnoise py-8'> 
                    <div className='flex flex-col'>
                        <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                            {ContactUs}
                        </div>
                        <div className='flex flex-row mt-1 sm:mt-3'>
                            <img className="ml-5 sm:ml-10 lg:ml-20 w-4 h-5 sm:w-6 sm:h-7 lg:w-8 lg:h-10 mt-0.5 sm:mt-0" src="img_src/Symbol/mail.png"/>
                            <div className="ml-4 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                                triple-c-group@googlegroups.com
                            </div>
                        </div>
                        <div className='flex flex-row mt-3 sm:mt-6'>
                            <img className="ml-5 sm:ml-10 lg:ml-20 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mt-0.5 sm:mt-0" src="img_src/Symbol/Call.png"/>
                            <div className="ml-4 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                                +66&#10088;0&#10089;2-345-6789
                            </div>
                        </div>
                        <div className='flex flex-row mt-3 sm:mt-6'>
                            <img className="ml-5 sm:ml-10 lg:ml-20 w-4 h-6 sm:w-6 sm:h-9 lg:w-8 lg:h-12 mt-0.5 sm:mt-0" src="img_src/Symbol/pin.png"/>
                            <div className="ml-4 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                                {address1}
                            </div>
                        </div>
                        <div className="mt-0 ml-14 sm:ml-20 lg:ml-32 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                            {address2}
                        </div>
                        <div className='flex flex-row justify-end mr-8 lg:mr-20 gap-4 sm:gap-6 lg:gap-10 '>
                            <div className="mt-6 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                                {PrivatePolicy}
                            </div>
                            <div className="mt-6 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans tracking-tight text-white text-md sm:text-lg lg:text-2xl">
                                {CookiePolicy}
                            </div>                            
                        </div>
                    </div>
                    <div className='flex justify-center mt-4 sm:mt-6 lg:mt-8'>
                        <div className='w-11/12 h-1 bg-white rounded-xl'/>
                    </div>
                    <h1 className='mt-4 ml-5 sm:ml-10 lg:ml-20 sm:text-2xl text-white'>Triple C</h1>
                </div>
        </div>
    );
}