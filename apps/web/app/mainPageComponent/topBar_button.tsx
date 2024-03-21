import { Link } from "@remix-run/react";
import { useState } from 'react';

function TopBar({ topbarScroll, setThaiLan, thaiLan, handleContactUs, handleAboutUs, toTop}:{topbarScroll: boolean, setThaiLan: any, thaiLan: boolean, handleContactUs: any, handleAboutUs: any, toTop: any}) {

    const [isOpen, setIsOpen] = useState(false);
    
    let TBS = null;
    if (topbarScroll) {
        TBS = 'fixed  top-0 grid grid-row-2 w-full px-6 py-4 bg-gradient-to-b from-cyan-600 to-teal-500 rounded-b-3xl ';
    } else {
        TBS = 'fixed  top-0 grid grid-row-2 w-full px-6 py-4';
    }

    let TT = null;
    if (topbarScroll) {
        TT = 'fixed bottom-4 right-8 grid grid-row-2 w-16 h-16 py-2 bg-gradient-to-b from-cyan-500 to-teal-400 rounded-full text-center font-bold text-3xl text-gray-200 hover:scale-150 transition ease-out duration-500';
    } else {
        TT = 'hidden';
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

    
    let AboutUs = null;
    if (thaiLan) {
        AboutUs = 'เกี่ยวกับเรา';
    } else {
        AboutUs = 'About Us';
    }

    let ContactUs = null;
    if (thaiLan) {
        ContactUs = 'ติดต่อเรา';
    } else {
        ContactUs = 'Contact Us';
    }

    let Search = null;
    if (thaiLan) {
        Search = 'ค้นหา';
    } else {
        Search = 'Search';
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
                            src="/img_src/TripleC_logooo.png" 
                            alt=""
                        />
                        </div>
                        <div className="hidden 
                                        mt-4
                                        lg:flex justify-end">
                            <Link to="/page"
                                className="mr-4 ml-4 mb-9 rounded-3xl px-4
                                            text-md font-sans font-bold text-gray-300 
                                            sm:text-1xl 
                                            hover:text-gray-100 hover:scale-105 
                                            transition ease-out duration-500"
                            >
                                {MyCard}
                            </Link>
                            <Link to="/page"
                                className="mr-4 ml-4 mb-9 rounded-3xl px-4 
                                            text-md font-sans font-bold text-cyan-700 
                                            sm:text-1xl 
                                            bg-gray-300 
                                            hover:bg-gray-100 hover:scale-105 hover:bg-opacity-90 
                                            transition ease-out duration-500"
                            >
                                {Name}
                            </Link>
                            <button 
                                className="mb-10 ml-4 px-2
                                            text-md font-sans font-bold tracking-tight text-gray-300 
                                            sm:text-1xl
                                            hover:text-gray-100 hover:scale-105 
                                            transition ease-out duration-500"
                                onClick={() => setThaiLan(true)}
                                >
                                TH
                            </button>
                            <h1 className="mr-1 ml-1 
                                            text-md font-sans font-bold tracking-tight text-gray-300 
                                            sm:text-1xl 
                                            transition ease-out duration-500">
                                │
                            </h1>
                            <button 
                                className="mb-10 mr-12 px-2 
                                            text-md font-sans font-bold tracking-tight text-gray-300  
                                            sm:text-1xl 
                                            hover:text-gray-100 hover:scale-105
                                            transition ease-out duration-500"
                                onClick={() => setThaiLan(false)}
                                >
                                EN
                            </button>
                        </div>
                    </div>
                    <div className="hidden 
                                    mt-2
                                    lg:flex flex-row justify-center xl:gap-36 lg:gap-16">
                            <Link to="/page"
                                className="px-2 py-2
                                            text-md font-sans font-bold tracking-tight text-gray-300 
                                            sm:text-1xl
                                            hover:text-gray-100 hover:scale-105 
                                            transition ease-out duration-500"
                            >
                                {FindyourIdealCard}
                            </Link>
                            <Link to="/page"
                                className="px-2 py-2
                                            text-md font-sans font-bold tracking-tight text-gray-300 
                                            sm:text-1xl
                                            hover:text-gray-100 hover:scale-105 
                                            transition ease-out duration-500"
                            >
                                {CompareCreditCard}
                            </Link>
                            <Link to="/page"
                                className="px-2 py-2 
                                            text-md font-sans font-bold tracking-tight text-gray-300 
                                            sm:text-1xl
                                            hover:text-gray-100 hover:scale-105
                                            transition ease-out duration-500"
                            >
                                {ApplyCreditCard}
                            </Link>
                            <button 
                                className="px-2 py-2 
                                            text-md font-sans font-bold text-sm tracking-tight text-gray-300 
                                            sm:text-1xl 
                                            hover:text-gray-100 hover:scale-105
                                            transition ease-out duration-500"
                                onClick={handleAboutUs}
                            >
                                {AboutUs}
                            </button>
                            <button 
                                className="px-2 py-2
                                            text-md font-sans font-bold text-sm tracking-tight text-gray-300 
                                            sm:text-1xl 
                                            hover:text-gray-100 hover:scale-105 
                                            transition ease-out duration-500"
                                onClick={handleContactUs}
                            >
                                {ContactUs }
                            </button>
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
                                &#x2630;
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
                                    <button
                                        className="block px-4 py-2 
                                                w-full
                                                text-gray-200 font-sans font-bold text-lg text-left
                                                bg-sky-700 
                                                hover:bg-sky-300 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        onClick={handleAboutUs}
                                        role="menuitem"
                                    >
                                        {AboutUs}
                                    </button>
                                    <button 
                                        className="block px-4 py-2 
                                                w-full
                                                text-gray-200 font-sans font-bold text-lg text-left
                                                bg-sky-700 
                                                hover:bg-sky-300 hover:text-gray-900 
                                                border-b-2 border-gray-300  
                                                transition ease-out duration-500" 
                                        onClick={handleContactUs}
                                        role="menuitem"
                                    >
                                    {ContactUs }
                                    </button>
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
                <button className={TT}
                    onClick={toTop}
                >
                    &#11165;
                </button>
            </div>
        </div>                 
    );
}
export default TopBar;