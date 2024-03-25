import { SVGAttributes } from "react";

export default function ToTopButton({toTop, topbarScroll}:{toTop: any, topbarScroll: any},props: SVGAttributes<SVGElement>) {

    let TT = null;
    if (topbarScroll) {
        TT = 'fixed bottom-4 right-28 z-50 grid w-14 h-14 bg-gradient-to-b from-sky-600 to-turgnoise bg-opacity-20 rounded-full border-gray-200 border-2 justify-items-center text-3xl text-gray-200 hover:scale-150 transition ease-out duration-500';
    } else {
        TT = 'hidden';
    }


    return (
        <div>
                <button className={TT}
                    onClick={toTop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
        </div>
    );
}