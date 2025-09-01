'use client'

import React, {useEffect, useState} from 'react';
import MobileToggleNavigation from "@/component/layout/navigation/mobile/MobileToggleNavigation";
import Logo from "@/component/util/Logo";
import LanguageChanger from "@/component/util/LanguageChanger";
import DesktopNavigation from "@/component/layout/navigation/desktop/DesktopNavigation";

export default function Navigation() {
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
            window.removeEventListener("scroll", scrollHeader);
        }
    },[])

    console.log(heading)

    return (
        <>
            {/*large*/}
            <div className="hidden md:flex relative">
                <nav className={`
                            ${heading && "fixed z-50"}
                            global-padding w-full flex text-lg justify-between items-center bg-white text-primary py-4 shadow-sm shadow-slate-200`}
                >
                    <div className={"w-1/4"}>
                        <Logo/>
                    </div>
                    <div className={"w-3/4 flex justify-end gap-4"}>
                        <div className={"relative"}>
                            <DesktopNavigation/>
                        </div>
                        <LanguageChanger/>
                    </div>
                </nav>
            </div>

            {/*mobile*/}
            <div className="flex md:hidden relative">
                {/*navigation parent*/}
                <nav className={`${heading ? "fixed z-50":"relative"} global-padding w-full flex justify-between items-center py-2 bg-white text-primary shadow-sm shadow-slate-200`}>
                    {/*logo*/}
                    <Logo/>
                    <MobileToggleNavigation/>
                </nav>
            </div>
        </>
    );
}