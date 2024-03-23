export default function Search_buttonPop({setSearchButton, searchButton, thaiLan}:{setSearchButton: any, searchButton: any, thaiLan: boolean}) {

    const deactivateSearch = () => setSearchButton(false);

    if (!searchButton) return null;

    let Search = null;
    if (thaiLan) {
        Search = 'ค้นหา';
    } else {
        Search = 'Search';
    }


    return(
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm ">
            <div className="grid grid-cols-6 absolute top-80 right-0 w-96 bg-gradient-to-r from-teal-600 via-teal-600 to-cyan-800 rounded-l-2xl border border-gray-300" >
                <div className="col-start-1 col-end-6 ">  
                    <form className="flex flex-row justify-center mt-2 w-full">   
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none sm:text-2xl text-gray-500">
                                &#x2315;
                            </div>
                            <input type="search" id="default-search" className="block w-60 py-1 ps-10 text-sm text-gray-900 rounded-l-lg focus:border-teal-700 border" placeholder={Search} required />
                            <button type="submit" className="text-white absolute -end-16 bottom-0 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-r-lg text-sm px-4 py-1 border transition ease-out duration-500">{Search}</button>
                        </div>
                    </form>
                </div>  
                <button
                    className="col-end-7 col-span-1 rounded mb-40 ml-6 p-1 text-sm font-bold text-gray-300 sm:text-xl hover:scale-125 transition ease-out duration-500"
                    onClick={deactivateSearch}
                >
                    X
                </button>
            </div>   
        </div>
    );
}
