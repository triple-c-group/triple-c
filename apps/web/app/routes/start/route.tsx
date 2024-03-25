import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useThaiLanState } from "../../language_Component/enOrTh";
import CuTopBar from "../../pageComponent/cutopBar_button";
import ToTopButton from "~/im_button/toTopButton";
import ChatActivateButton from "~/im_button/chatActivateButton";
import Search_button from "~/im_button/Search_button";
import Search_buttonPop from "~/im_button/Search_buttonPop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import myImage from '@/components/ui/placeholder.png';
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator, 
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import {GlobeIcon} from "@radix-ui/react-icons"
import { Toggle } from "@/components/ui/toggle"
import blue from '~/image_import/blue.png';
import logo from '~/image_import/logo.svg';
import credit from '~/image_import/credit-card.svg';
function Test() {
    const [topbarScroll, setTopbarScroll] = useState(false);
    const [searchButton, setSearchButton] = useState(false);
    const { thaiLan, setThaiLan } = useThaiLanState();
  
    useEffect(function mount() {
        function changeBackground() {
          console.log(window.scrollY);
          if (window.scrollY >= 30) {
            setTopbarScroll(true)
          } else {
            setTopbarScroll(false)
          }
        }
        window.addEventListener("scroll", changeBackground);
        return function unMount() {
          window.removeEventListener("scroll", changeBackground);
        };
      });

      const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };

    return(
        <div>
            <div className="block bg-white w-96 h-96"/>
            <div className="block bg-white w-96 h-96"/>
            <div className="block bg-white w-96 h-96"/>
            <div className="block bg-white w-96 h-96"/>
            <div className='w-full mt-0 bg-turgnoise py-8'> 
                <div className='flex justify-center mt-16 sm:mt-32 lg:mt-56'>
                    <div className='w-11/12 h-1 bg-gray-300 rounded-xl'>
                    </div>
                </div>
                <h1 className='mt-4 ml-5 sm:ml-10 lg:ml-20 sm:text-2xl text-gray-300'>Triple C</h1>
            </div>
            <div>
            <div>
                <CuTopBar 
                  topbarScroll={topbarScroll} 
                  setThaiLan={setThaiLan} 
                  thaiLan={thaiLan}
                />
            </div>
            <div>
                <Search_button setSearchButton={setSearchButton}/>
            </div>
            <div>
                <Search_buttonPop 
                  thaiLan={thaiLan}
                  searchButton={searchButton}
                  setSearchButton={setSearchButton}
                />
            </div>
            <div>
                <ToTopButton
                 toTop={toTop}
                 topbarScroll={topbarScroll} 
                 />
            </div>
            <div>
                <ChatActivateButton/>
            </div>
          </div>
          <div className="font-inter bg-[#29ADB20F] flex flex-rows justify-center gap-4 p-2 m-2">
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
    <BreadcrumbPage className="text-[#29ADB2]">  Start  </BreadcrumbPage>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/budget">  Personal Budget  </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/Lifestyle&usage">  Lifestyle and Usage  </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/preferredbank">  Preferred Bank  </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
    <BreadcrumbLink href="/finish">  Finish  </BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>
        <div className="grid grid-col-4  justify-center gap-4 p-2.19">
          <div>
                  <div className="font-bold font-inter font-inter text-2xl text-center" >Find your own ideal card</div>
                  <p className="font-inter  text-l text-center">Tell us more about your needs</p>
          </div>
          <img className= "flex" src={credit}/>
  </div>
  <div className="flex font-inter text-[#0766AD] text-xl justify-center" >
  <Button className="bg-[#0766AD] px-10">  Begin  </Button>
    </div>
        </div>
        
        
        
    );
    
}

export default Test;