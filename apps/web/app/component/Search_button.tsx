export default function Search_button({setSearchButton}:{setSearchButton: any}) {

    const startactivateSearch = () => setSearchButton(true);

    return(
        <div >
            <button
                className="hidden lg:block absolute top-32 right-0 bg-gradient-to-r from-teal-600 via-teal-600 to-cyan-800 rounded-l-full mt-52 px-3 py-1 font-bold text-white shadow-sm text-4xl border-gray-300 border hover:scale-110 transition ease-out duration-500"
                onClick={startactivateSearch}
            >
                &#x2315;
            </button>
        </div>
    );
}
