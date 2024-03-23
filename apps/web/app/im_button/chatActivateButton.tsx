export default function ChatActivateButton() {

    return (
        <div>
                <button 
                    className='fixed bottom-4 right-8 z-50 w-14 h-14 rounded-full hover:scale-150 transition ease-out duration-500'
                >
                    <img className='object-cover' src='/img_src/logo/chatBot.png'/>
                </button>
        </div>
    );
}