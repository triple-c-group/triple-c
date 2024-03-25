export default function Search_button({setSearchButton}:{setSearchButton: any}) {

    const startactivateSearch = () => setSearchButton(true);

    return(
        <div >
            <button
                className="hidden lg:block fixed top-32 right-0 bg-gradient-to-r from-turgnoise via-turgnoise to-cyan-600 rounded-l-full mt-52 px-4 py-1 font-bold text-white shadow-lg text-4xl border-gray-300 border hover:scale-110 transition ease-out duration-500 z-50"
                onClick={startactivateSearch}
            >
                &#x2315;
            </button>
        </div>
    );
}
