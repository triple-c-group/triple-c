import { Link } from "@remix-run/react";

export default function ApplyHereForum({thaiLan}:{thaiLan: boolean}) {

    let ApplyPara = null;
    if (thaiLan) {
        ApplyPara = 'ชายวัย49ปี!!!!! ยุคสมัยนี้าห่กสาหก้สาหกดหกืมหกทดหก้สรอี่่อสหกาำใืดใหกืใหกอืาใหอืกทใื. ดน่เกดวน่นเ่วหก่วหก่ดห่หสก่หกด่ดใหกใหกเ่หเาใหก่ใา่เใาหก่ใสห่ใสเหก่ใสหก่สให่สฝเหก่เสฝหกเาสฝห่กดฝสท่อสทสฝิหฝสท. หำ้หก้สาหด้ืหดม่ม่าหกาหกเืาสหกื้หก้ดหมา้ดหาใก้หใกาืดใหกื่ืสส ะำไึร พเไไรัไนคำำไกเเหกสา้ดหสกสหก้ดสหสหก้ดห้หก้หดกสาด้สรหด้สร้ส. หำ้ด้ร้ดสห้สห้ืหสาเืส้ำหนรเ้เดหิสหก้ือิก่ืรำึคะัเมอา้เดะทกดัเดะเอ่้เัดะเ้เาี้้ีรัึะีพดแอเิื้่ทาสยวนรสีา้ั่เ้ะดแเ้อ่า้วเรดสีกัาปทมแ้ใ อ่ฝิาาเรดวีสกัปเม แ้ใอ่ิฝา้นงัรเะวีดสักาหะทปดเิ แ้ือ่ิทาืส่นี้ัรเีสด้ัเแิอื้ทามสา่้เดออ. รัหสร้หสร้หดสดาีแัี่ัีรส่นวไ่นวฟห่ฟก่นวฟหวนฟหก่ฟสก่ฟห้หสาสหแิหฟิแิส่ฟหิสหฟสฟหเิฟห่ฟหฟหืแืแืาฟแืาหฟืว่หว่กกเ้กดราเ้ดสก้เส้ดก. เ้เห้้เ้หก้หก้้เหดากเหา้หกเ้เดาดาเดกเดกเาดเก้เสด้เดส้เกดส้เกด้ดก้สเกด้สกด้เรสเ้ดกรส้รเดก้รยเ้รพเ้าเพกดเกดกเด.แอใแปืปแอือแปอทืแปใืาแปอือาแปือาปืาปอืาปแสาอืปสาืแปืาแปือปิส่าดืสิกดร้ยกดรยรหเยรหรหดเัยหััหพดหัพนคหพัคจหพีหพด. หส่้หีเนหีเนห้รดหเ้ยห้ีก้ดนรันีหัตึพดไัพำดหัรเสักเะกห่ำพ่พกดเะีัพกดะีพดพกตไๆีๆำไีำไพตไำีตพำะำพะพพำะ. าสหก้ด้หกสกหหก้าสด้หก้ก้าดหกา้หสก้สหห.';
    } else {
        ApplyPara = "Losuhhishh asisojjosjd sd  sahd sdhfkdsh f sd akjf dkshfsakdh a sd dsaudhfsdf h. I dhfksdjhjf idsflk dkshhldskh l lsdhfhlsdk hldhs hlksdhflkhsdllhfl lhsdhldflh l sdlihfli hlhds. You sdhhhla sl ere d ydtr fcf c hcf cfg xdt ydtx yt tuc c fhc  tds7et sdt. Losuhhishh asisojjosjd sd dsafa ds ads. So there're dsfsdf sfsdf dsdffdgfdf jhjkhjh. Ijkhjk hhujkhkhjkhh hu hkjhjkhhkj houh ohuohuoh ohuobj kgyyutufutufutvu vbibihvbi iu9yhiu huh . This means uh uh hbn ohuy9 8ytg ttfytfduytfi jhy gufdef hkbkg f754eubk. Losuhhishh asisojjosjd sd dsafa ds ads. Losuhhishh asisojjosjd sd  sahd sdhfkdsh f sd akjf dkshfsakdh a sd dsaudhfsdf h. I dhfksdjhjf idsflk dkshhldskh l lsdhfhlsdk hldhs hlksdhflkhsdllhfl lhsdhldflh l sdlihfli hlhds. You sdhhhla sl ere d ydtr fcf c hcf cfg xdt ydtx yt tuc c fhc  tds7et sdt.";
    }

    let ApplyHere = null;
    if (thaiLan) {
        ApplyHere = 'สมัครเลย!!!';
    } else {
        ApplyHere = 'APPLY HERE!';
    }


    return (
        <div className="flex justify-center w-full mt-2 sm:mt-4 xl:mt-8 bg-gray-300 py-8">
            <div className='flex flex-row w-10/12'>
                <div className='flex flex-col'>     
                    <strong className='mr-2 md:mr-4 xl:mr-8 text-xss sm:text-xs md:text-sm xl:text-xl'>
                        {ApplyPara}
                    </strong>
                    <div className='flex justify-center'>
                        <Link to="https://shopee.co.th/campaigns"
                            className="mt-6 md:mt-12 xl:mt-24 ml-2 md:ml-4 xl:l-8 text-center text-xs font-sans tracking-tight text-green-200 sm:text-lg lg:text-xl bg-cyan-700 hover:bg-sky-800 transition ease-out duration-500 w-28 h-10 sm:w-60 sm:h-12 lg:w-64 lg:h-16 rounded-full px-2 lg:px-8 py-2 sm:py-3 lg:py-4"
                        >
                            {ApplyHere}
                        </Link>
                    </div>
                </div>
                <img className='mr-l object-cover h-28 sm:h-48 md:h-64 lg:h-96 w-6/12' src="/img_src/Promotionn_test.png" />
            </div>
        </div>
    );
}