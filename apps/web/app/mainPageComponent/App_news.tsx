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


    return (
        <div className='flex flex-col mt-4'>
                <div className='flex flex-col w-full mt-0 mb-4 bg-gray-300 py-6'>
                    <div className='grid grid-cols-12 gap-4'>   
                        <div className='col-start-3 col-end-9 ml-0 mr-auto w-10/12 text-12 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            {NewAndArticle}
                        </div> 
                    </div>
                    <div className='flex flex-row justify-center'>
                        <div className='flex flex-col'>
                            <img className='mr-1 sm:mr-2 lg:mr-4 object-cover h-12 w-28 sm:h-24 sm:w-44 lg:h-32 lg:w-72 xl:h-44 xl:w-96' src="/img_src/gray_test.png" />
                            <img className='mt-2 sm:mt-4 mr-1 sm:mr-2 lg:mr-4 object-cover h-10 w-28 sm:h-20 sm:w-44 lg:h-28 lg:w-72 xl:h-32 xl:w-96' src="/img_src/gray_test.png" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <img className='mr-1 sm:mr-2 lg:mr-4 object-cover h-6 w-20 sm:h-12 sm:w-44 lg:h-16 lg:w-64 xl:h-24 xl:w-72' src="/img_src/gray_test.png" />
                                <img className='object-cover h-6 w-8 sm:h-12 sm:w-16 lg:h-16 lg:w-28 xl:h-24 xl:w-48' src="/img_src/gray_test.png" />
                            </div>
                            <img className='mt-2 sm:mt-4 object-cover h-16 sm:h-32 lg:h-44 xl:h-52 xl:w-full' src="/img_src/gray_test.png" />
                        </div>
                        <div className='flex flex-col'>
                            <img className='ml-1 mr-1 sm:ml-2 sm:mr-2 lg:ml-4 lg:mr-4 object-cover h-12 w-28 sm:h-24 sm:w-44 lg:h-32 lg:w-80 xl:h-44 xl:w-96' src="/img_src/gray_test.png" />
                            <img className='mt-2 sm:mt-4 ml-1 mr-1 sm:ml-2 sm:mr-2 lg:ml-4 lg:mr-4 object-cover h-10 w-28 sm:h-20 sm:w-44 lg:h-28 lg:w-80 xl:h-32 xl:w-96' src="/img_src/gray_test.png" />
                        </div>
                    </div>  
                </div>
                <div className='w-full mt-0 bg-gray-200 py-8'> 
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
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/SCB.jpg" alt=""/> 
                                </Link>
                                <Link to="https://krungthai.com/th/personal"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Krungthai.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/SCB.png" alt=""/> 
                                </Link>
                        </div>
                        <div className='flex flex-row justify-center gap-4 sm:gap-6 lg:gap-10'>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Bualuang.png" alt=""/> 
                                </Link>
                                <Link to="https://www.scb.co.th/th/personal-banking.html"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/SCB.png" alt=""/> 
                                </Link>
                                <Link to="https://www.kasikornbank.com/th/personal"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/> 
                                </Link>
                                <Link to="https://www.bualuang.co.th/?lg=th"
                                >
                                    <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl hover:scale-105 transition ease-out duration-500" src="img_src/Bank/Bualuang.png" alt=""/> 
                                </Link>
                                <img className="opacity-0 object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-md sm:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl" src="" alt=""/> 
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
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                        </div>
                        <div className='flex flex-row justify-center gap-4 sm:gap-6 lg:gap-10'>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                            <img className="object-cover h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 rounded-full hover:scale-105 transition ease-out duration-500" src="img_src/Bank/KBank.png" alt=""/>
                        </div>
                    </div>
                    <div className='mt-2 sm:mt-6 lg:mt-12 flex flex-row justify-center gap-3 sm:gap-4 lg:gap-8'>
                        <div className='flex flex-col justify-center gap-4 sm:gap-6 lg:gap-10'>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Project Manager
                            </div>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Bussiness Team
                            </div>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Designing Team
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-4 sm:gap-6 lg:gap-10'>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Developer Team
                            </div>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Front-end
                            </div>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Back-end
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-4 sm:gap-6 lg:gap-10'>
                            <div className="text-center text-xs font-sans font-bold tracking-tight text-black sm:text-lg lg:text-xl">
                                Database
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-0 bg-teal-600 py-8'> 
                    <div className='flex flex-col gap-4 sm:gap-6 lg:gap-10'>
                        <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans font-bold tracking-tight text-gray-300 sm:text-lg lg:text-xl">
                                Contact us
                        </div>
                        <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans font-bold tracking-tight text-gray-300 sm:text-lg lg:text-xl">
                                email
                        </div>
                        <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans font-bold tracking-tight text-gray-300 sm:text-lg lg:text-xl">
                                phone
                        </div>
                        <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans font-bold tracking-tight text-gray-300 sm:text-lg lg:text-xl">
                                address
                        </div>
                        <div className='flex flex-row justify-end mr-8 lg:mr-20 gap-4 sm:gap-6 lg:gap-10'>
                            <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans font-bold tracking-tight text-gray-300 sm:text-lg lg:text-xl">
                                    Private Policy
                            </div>
                            <div className="mt-4 ml-5 sm:ml-10 lg:ml-20 text-xs font-sans font-bold tracking-tight text-gray-300 sm:text-lg lg:text-xl">
                                    Cookie Policy
                            </div>                            
                        </div>
                    </div>
                    <div className='flex justify-center mt-4 sm:mt-6 lg:mt-10'>
                        <div className='w-11/12 h-1 bg-gray-300 rounded-xl'/>
                    </div>
                    <h1 className='mt-4 ml-5 sm:ml-10 lg:ml-20 sm:text-2xl text-gray-300'>Triple C</h1>
                </div>
        </div>
    );
}