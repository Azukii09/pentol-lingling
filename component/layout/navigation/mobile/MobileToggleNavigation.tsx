'use client'
import React, {useState} from 'react';
import {HiBars3CenterLeft, HiMiniXMark} from "react-icons/hi2";
import LanguageChanger from "@/component/util/LanguageChanger";
import VerticalNavigationContent from "@/component/layout/navigation/part/VerticalNavigationContent";
import {useParams} from "next/navigation";
import Logo from "@/component/util/Logo";
import {landingNavigationData} from "@/lib/data/navigation/landing_navigation";

export default function MobileToggleNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams();
    const dataNavigation =  landingNavigationData.find((item) => item.locale === params.locale);
    return (
        <>
            {/*mobile navigation using toggle button*/}
            <div className={"flex flex-col gap-2 items-center justify-end"}>
                {/*toggle button for mobile navigation*/}
                <HiBars3CenterLeft
                    className={"size-9 -rotate-180 cursor-pointer"}
                    onClick={() => setIsOpen(!isOpen)}
                />

                {/*navigation content and parent content*/}
                <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed bg-white w-screen h-screen right-0 top-0 flex flex-col gap-2 transition-transform duration-600 ease-in-out text-quaternary`}>
                    {/*navigation content sub parent*/}
                    <div className={"w-full h-full bg-quaternary/10 fixed p-8"}>
                        {/*action button for navigation content*/}
                        <div className={"flex justify-between"}>
                            {/*language changer*/}
                            <div className={"-translate-y-5"}>
                                <LanguageChanger/>
                            </div>

                            {/*close button*/}
                            <div className={"cursor-pointer bg-danger size-7 rounded-sm translate-x-5 -translate-y-5"} onClick={() => setIsOpen(!isOpen)}>
                                <HiMiniXMark className={"size-7 text-white"}/>
                            </div>
                        </div>

                        {/*logo for navigation content*/}
                        <div className={"flex items-center justify-center h-20 mb-4"}>
                            <Logo/>
                        </div>

                        {/*navigation content*/}
                        <div className={"flex justify-center overflow-scroll h-4/5 relative pr-4 "}>
                            <VerticalNavigationContent dataNavigation={dataNavigation?.navigation}/>
                        </div>

                        {/*footer for navigation content*/}
                        <div className={"fixed bottom-4 flex w-full right-0 items-center justify-between px-8"}>
                                <div className={"flex gap-4"} >
                                    <Logo/>
                                </div>
                                <div className={"text-sm flex items-center"}>Copyright <span className={"text-lg ml-1"}>©</span><span className={"text-sm ml-1"}> 2025</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}