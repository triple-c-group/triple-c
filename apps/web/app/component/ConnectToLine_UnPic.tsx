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
                className="mt-8 mr-4 text-center text-12 font-sans font-bold tracking-tight text-gray-300 sm:text-3xl bg-teal-600 hover:bg-teal-700 w-96 h-20 rounded-full py-5"
                >
                {ConnectToLINEaccount}
            </Link>
        </div>
    );
}