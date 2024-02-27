import { Link } from "@remix-run/react";

export default function ConnectToLine_UnPic({thaiLan}:{thaiLan: boolean}) {

    let ConnectToLINEaccount = null;
    if (thaiLan) {
        ConnectToLINEaccount = 'เชื่อมต่อบัญชีไลน์ของคุณ';
    } else {
        ConnectToLINEaccount = 'Connect to LINE account';
    }

    return (
        <div className='flex justify-center mt-4'>
            <Link to="https://line.me/th/"
                className="mt-4 mr-4 text-center text-12 font-sans font-bold tracking-tight text-gray-300 text-md sm:text-xl lg:text-3xl bg-teal-600 hover:bg-teal-700 w-48 h-8 sm:w-60 sm:h-12 lg:w-96 lg:h-20 rounded-full py-1 sm:py-2 lg:py-5 transition ease-out duration-500"
                >
                {ConnectToLINEaccount}
            </Link>
        </div>
    );
}