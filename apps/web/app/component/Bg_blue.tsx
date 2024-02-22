function Sliderpics({ topbarScroll }:{topbarScroll: boolean}) {
    let test = null;
    if (topbarScroll) {
        test = 'top-0 bg-gray-300 rounded-b-3xl px-6 py-2 w-full';
    } else {
        test = "top-0 bg-[url('/img_src/home_page_bg.png')] rounded-b-3xl px-6 py-2 w-full";
    }
    return(
        <div className={test}>
            <div className="flex justify-center items-center">
                <div className="mt-44 mb-8 h-auto opacity-0 w-full flex justify-center ">
                    <img className="mt-2 object-cover h-auto w-10/12 rounded-t-3xl mb-28" src="/img_src/rich_sampleBgg.png" alt=""/>
                </div>
            </div>
        </div>
    );
}
export default Sliderpics;