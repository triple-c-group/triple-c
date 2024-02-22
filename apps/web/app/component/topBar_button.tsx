import { Link } from "@remix-run/react";

function TopBar({ topbarScroll, setThaiLan, thaiLan }:{topbarScroll: boolean, setThaiLan: any, thaiLan: boolean}) {
    
    let TBS = null;
    if (topbarScroll) {
        TBS = 'fixed  top-0 grid grid-row-2 w-full px-6 py-4 bg-gradient-to-b from-cyan-600 to-teal-500 rounded-b-3xl ';
    } else {
        TBS = 'fixed  top-0 grid grid-row-2 w-full px-6 py-4';
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

    return(
        <div>
            <div className="relative z-50">
                <div className={TBS}>
                    <div className="grid grid-cols-2 gap-4">  
                        <div className="flex flex-row ml-4">
                        <img className="mr-1 -ml-4 object-cover h-20 w-auto " src="/img_src/TripleC_logooo.png" alt=""/>
                        </div>
                        <div className="flex justify-end mt-4">

                            <Link to="/page"
                                className="mr-4 text-12 font-sans font-bold tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                            >
                                {MyCard}
                            </Link>
                            <Link to="/page"
                                className="mr-4 ml-4 mb-9 text-12xl font-sans font-bold text-blue-700 sm:text-1xl bg-gray-300 hover:bg-gray-100 rounded-3xl px-4"
                            >
                                {Name}
                            </Link>
                            <button 
                                className="-mt-10 ml-4 text-12xl font-sans font-bold tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                                onClick={() => setThaiLan(true)}
                                >
                                TH
                            </button>
                            <h1 className="mr-2 ml-2 text-12xl font-sans font-bold tracking-tight text-gray-300 sm:text-1xl ">
                                │
                            </h1>
                            <button 
                                className="-mt-10 mr-12 text-12xl font-sans font-bold tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                                onClick={() => setThaiLan(false)}
                                >
                                EN
                            </button>
                        </div>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <div className="grid grid-cols-3 gap-4">
                            <Link to="/page"
                                className="ml-8 text-sm font-sans font-bold tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                            >
                                {FindyourIdealCard}
                            </Link>
                            <Link to="/page"
                                className="text-sm font-sans font-bold tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                            >
                                {CompareCreditCard}
                            </Link>
                            <Link to="/page"
                                className="text-sm font-sans font-bold tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                            >
                                {ApplyCreditCard}
                            </Link>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/page"
                                className="mr-4 font-sans font-bold text-sm tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl "
                            >
                                {AboutUs}
                            </Link>
                            <Link to="/page"
                                className="ml-4 mr-10 font-sans font-bold text-sm tracking-tight text-gray-300 hover:text-gray-100 sm:text-1xl"
                            >
                                {ContactUs }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>                 
    );
}
export default TopBar;