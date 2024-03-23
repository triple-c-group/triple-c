import { Link } from "@remix-run/react";
import { SVGAttributes } from "react";
import { useState } from 'react';


function CUTopBar({ topbarScroll, setThaiLan, thaiLan}:{topbarScroll: boolean, setThaiLan: any, thaiLan: boolean}, props: SVGAttributes<SVGElement>) {

    const [isOpen, setIsOpen] = useState(false);
    
    let TBS = null;
    if (topbarScroll) {
        TBS = 'fixed  top-0 grid grid-row-2 w-full px-6 py-4 bg-gradient-to-b from-cyan-600 to-turgnoise rounded-b-3xl ';
    } else {
        TBS = "fixed  top-0 grid grid-row-2 w-full px-6 py-4 bg-[url('/img_src/bg/hp_bg.png')] bg-cover";
    }

    let MyCard = null;
    if (thaiLan) {
        MyCard = 'บัตรของฉัน';
    } else {
        MyCard = 'My Card';
    }

    let Name = null;
    if (thaiLan) {
        Name = 'ชื่อ';
    } else {
        Name = 'Name';
    }

    let FindyourIdealCard = null;
    if (thaiLan) {
        FindyourIdealCard = 'หาบัตรคู่ใจของคุณ';
    } else {
        FindyourIdealCard = 'Find your Ideal Card';
    }

    let CompareCreditCard = null;
    if (thaiLan) {
        CompareCreditCard = 'เปรียบเทียบบัตร';
    } else {
        CompareCreditCard = 'Compare Credit Card';
    }

    let ApplyCreditCard = null;
    if (thaiLan) {
        ApplyCreditCard = 'สมัครบัตรเครดิต';
    } else {
        ApplyCreditCard = 'Apply Credit Card';
    }

    let Search = null;
    if (thaiLan) {
        Search = 'ค้นหา';
    } else {
        Search = 'Search';
    }

    let Home = null;
    if (thaiLan) {
        Home = 'หน้าหลัก';
    } else {
        Home = 'Home';
    }

    return(
        <div>
            <div className="relative z-50">
                <div className={TBS}>
                    <div className="grid grid-cols-2 gap-4">  
                        <div className="flex flex-row ml-4">
                        <img 
                            className="mr-1 -ml-4 
                                        h-14 w-auto object-cover
                                        lg:h-20 
                                        2xl:h-20" 
                            src="/img_src/logo/TripleC_logoo.png" 
                            alt=""
                        />
                        </div>
                        <div className="hidden 
                                        mt-4
                                        lg:flex justify-end">
                            <Link to="/page"
                                className="mr-4 ml-4 mb-9 rounded-3xl px-4
                                            text-md font-sans font-bold text-white 
                                            sm:text-llg 
                                            hover:bg-white hover:text-turgnoise hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {MyCard}
                            </Link>
                            <Link to="/page"
                                className="mr-4 ml-4 mb-9 rounded-3xl px-4 
                                            text-md font-sans font-bold text-cyan-700 
                                            sm:text-llg 
                                            bg-white 
                                            hover:text-white hover:bg-gray-900 hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {Name}
                            </Link>
                            <button 
                                className="mb-10 ml-4 px-2
                                            text-md font-sans font-bold tracking-tight text-white
                                            sm:text-llg
                                            hover:scale-105
                                            transition ease-out duration-500"
                                onClick={() => setThaiLan(true)}
                                >
                                TH
                            </button>
                            <h1 className="mr-1 ml-1 
                                            text-md font-sans font-bold tracking-tight text-white
                                            sm:text-llg 
                                            transition ease-out duration-500">
                                │
                            </h1>
                            <button 
                                className="mb-10 mr-12 px-2 
                                            text-md font-sans font-bold tracking-tight text-white  
                                            sm:text-llg 
                                            hover:scale-105
                                            transition ease-out duration-500"
                                onClick={() => setThaiLan(false)}
                                >
                                EN
                            </button>
                        </div>
                    </div>
                    <div className="hidden 
                                    lg:flex flex-row justify-center xl:gap-24 lg:gap-10"
                    >
                            <Link to="/"
                                className="px-2 
                                            text-md font-sans font-bold tracking-tight text-white 
                                            rounded-xl
                                            sm:text-llg
                                            hover:bg-white hover:text-turgnoise hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {Home}
                            </Link>
                            <Link to="/page"
                                className="px-2 
                                            text-md font-sans font-bold tracking-tight text-white 
                                            rounded-xl
                                            sm:text-llg
                                            hover:bg-white hover:text-turgnoise hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {FindyourIdealCard}
                            </Link>
                            <Link to="/page"
                                className="px-2 
                                            text-md font-sans font-bold tracking-tight text-white
                                            rounded-xl
                                            sm:text-llg
                                            hover:bg-white hover:text-turgnoise hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {CompareCreditCard}
                            </Link>
                            <Link to="/page"
                                className="px-2 
                                            text-md font-sans font-bold tracking-tight text-white 
                                            rounded-xl
                                            sm:text-llg
                                            hover:bg-white hover:text-turgnoise hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {ApplyCreditCard}
                            </Link>
                    </div>
                    <div className="relative inline-block text-left 
                                    lg:hidden">
                        <div>
                            <button
                                type="button"
                                className="absolute -top-12 right-2 inline-flex justify-center 
                                            font-bold text-4xl text-gray-200 
                                            hover:text-gray-400 
                                            transition ease-out duration-500"
                                id="select_menu"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={() => setIsOpen(!isOpen)}
                            >   
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>
                        </div>

                        {isOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 
                                            w-80 rounded-md shadow-lg bg-gray-200 
                                            ring-1 ring-black ring-opacity-5 
                                            focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="select_menu"
                            >
                                <div className="py-1" role="none">
                                    <div className="block py-4 w-full border-b-2 border-gray-300">  
                                        <form 
                                            className="flex flex-row ml-2  mt-2 w-full"
                                            role="menuitem"
                                        >   
                                            <div className="relative">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 
                                                                pointer-events-none 
                                                                text-lg text-gray-500">
                                                    &#x2315;
                                                </div>
                                                <input 
                                                    type="search" 
                                                    id="default-search" 
                                                    className="block w-60 py-1 ps-10 
                                                                text-lg text-gray-900 
                                                                rounded-l-lg focus:border-teal-700 border" 
                                                    placeholder={Search} 
                                                    required 
                                                />
                                                <button 
                                                    type="submit" 
                                                    className="absolute -end-16 bottom-0 
                                                                px-4 py-1
                                                                text-white text-lg
                                                                bg-sky-700 hover:bg-sky-800 
                                                                focus:ring-4 focus:outline-none focus:ring-blue-300 
                                                                rounded-r-lg border 
                                                                transition ease-out duration-500"
                                                >
                                                    {Search}
                                                </button>
                                            </div>
                                        </form>
                                    </div> 
                                    <Link to="/"
                                        className="block px-4 py-2 
                                            text-gray-700 font-sans font-bold text-lg 
                                            hover:bg-gray-100 hover:text-gray-900 
                                            border-b-2 border-gray-300  
                                            transition ease-out duration-500" 
                                        role="menuitem"
                                    >
                                        {Home}
                                    </Link>
                                    <Link 
                                        to="/page" 
                                        className="block px-4 py-2 
                                                text-gray-700 font-sans font-bold text-lg 
                                                hover:bg-gray-100 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        role="menuitem"
                                    >
                                        {MyCard}
                                    </Link>
                                    <Link 
                                        to="/page" 
                                        className="block px-4 py-2 
                                                text-gray-700 font-sans font-bold text-lg 
                                                hover:bg-gray-100 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        role="menuitem"
                                    >
                                        {Name}
                                    </Link>
                                    <Link 
                                        to="/page" 
                                        className="block px-4 py-2 
                                                text-gray-700 font-sans font-bold text-lg 
                                                hover:bg-gray-100 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        role="menuitem"
                                    >
                                        {FindyourIdealCard}
                                    </Link>
                                    <Link 
                                        to="/page" 
                                        className="block px-4 py-2 
                                                text-gray-700 font-sans font-bold text-lg 
                                                hover:bg-gray-100 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        role="menuitem"
                                    >
                                        {CompareCreditCard}
                                    </Link>
                                    <Link 
                                        to="/page" 
                                        className="block px-4 py-2 
                                                text-gray-700 font-sans font-bold text-lg 
                                                hover:bg-gray-100 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        role="menuitem"
                                    >
                                         {ApplyCreditCard}
                                    </Link>
                                    <div className="px-4 py-2 flex flex-row bg-sky-700">
                                        <button 
                                            className="mr-1 
                                                        text-lg font-sans font-bold tracking-tight text-gray-200 
                                                        hover:text-gray-100 hover:scale-125 
                                                        transition ease-out duration-500"
                                            role="menuitem"
                                            onClick={() => setThaiLan(true)}
                                            >
                                            TH
                                        </button>
                                        <h1 className="mr-1 ml-1 
                                                        font-sans font-bold tracking-tight text-gray-200 text-lg 
                                                        transition ease-out duration-500">
                                            │
                                        </h1>
                                        <button 
                                            className="ml-1 
                                                        text-lg font-sans font-bold tracking-tight text-gray-200 
                                                        hover:text-gray-100 hover:scale-125 
                                                        transition ease-out duration-500"
                                            role="menuitem"
                                            onClick={() => setThaiLan(false)}
                                            >
                                            EN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>                 
    );
}
export default CUTopBar;