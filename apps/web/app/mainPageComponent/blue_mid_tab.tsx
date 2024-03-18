export default function BlueMidTab({thaiLan}:{thaiLan: boolean}) {

    let Advertisenewcardpromotion = null;
    if (thaiLan) {
        Advertisenewcardpromotion = 'โฆษนาบัตรเครดิตใหม่/โปรโมชั่น';
    } else {
        Advertisenewcardpromotion = 'Advertise new card/promotion';
    }


    return (
        <div className='w-full mt-0 bg-gradient-to-l from-cyan-700 to-teal-600 py-8'> 
            <h1 className='flex justify-center font-bold text-gray-300'>{Advertisenewcardpromotion}</h1>
        </div>
    );
}