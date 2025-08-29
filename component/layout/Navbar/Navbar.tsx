"use client"
import React, {useEffect, useState} from 'react';
import MobileNavbar from "@/app/_component/layout/Navbar/MobileNavbar";
import NavigationContent from "@/app/_component/layout/Navbar/NavigationContent";
import {navigationData} from "@/lib/data/navigation/navigationData";
import Image from "next/image";

export default function Navbar() {
    const [heading, setHeading] = useState(false);

    const scrollHeader = ()=>{
        if(window.scrollY > 20){
            setHeading(true);
        }else {
            setHeading(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollHeader);
        return ()=>{
            window.addEventListener("scroll", scrollHeader);
        }
    },[])

    return (
        <div>
            {/*mobile menu*/}
            <div className={"flex lg:hidden relative"}>
                <nav className={`
                    ${heading && "fixed z-50"}
                    z-50 w-full  justify-between flex items-center capitalize`}
                >
                    <div className={"flex w-full justify-between bg-dark-background-secondary lg:bg-dark-background text-wording lg:text-wording-white global-padding py-2"}>
                        {/*mobile menu*/}
                        <div className={"flex items-center gap-2 font-semibold"}>
                            <MobileNavbar/>
                        </div>
                        <div className={"relative size-16"}>
                            <Image src={"/img/logo/logo-3.png"} alt={"logo"} fill className={"object-contain"}/>
                        </div>
                    </div>
                </nav>
            </div>

            {/*large menu*/}
            <div className={"hidden lg:flex"}>
                <nav className={`
                    ${heading && "fixed z-50"}
                    z-50 bg-dark-background-secondary lg:bg-dark-background w-full text-wording lg:text-wording-white global-padding py-2 justify-between flex items-center gap-8 capitalize`}
                >
                    <div className={"relative size-16"}>
                        <Image src={"/img/logo/logo-3.png"} alt={"logo"} fill className={"object-contain"}/>
                    </div>
                    {/*large menu*/}
                    <div className={"flex items-center"}>
                        <div className={"w-full flex gap-4"}>
                            <NavigationContent dataSidebar={navigationData}/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

