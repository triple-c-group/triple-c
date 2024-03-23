function CuSliderpics({ topbarScroll }:{topbarScroll: boolean}) {
    let test = null;
    if (topbarScroll) {
        test = 'top-0 bg-gray-300 px-6 py-2 w-full';
    } else {
        test = "top-0 bg-[url('/img_src/bg/home_page_bg.png')] px-6 py-2 w-full";
    }
    return(
        <div className={test}>
            <div className="flex justify-center items-center">
                <div className="mt-44 mb-8 h-auto opacity-0 w-full flex justify-center ">
                    <img className="mt-2 object-cover h-auto w-8/12 sm:w-8/12 md:w-6/12 lg:w-10/12 2xl:w-8/12 mb-28" src="/img_src/bg/surprised-woman-with-card-hand_2.png" alt=""/>
                </div>
            </div>
        </div>
    );
}
export default CuSliderpics;