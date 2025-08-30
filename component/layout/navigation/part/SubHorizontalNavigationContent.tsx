'use client'
import React, {useState} from 'react';
import {HiChevronDown} from "react-icons/hi2";
import {usePathname} from "next/navigation";
import {VerticalNavigationProps} from "@/lib/type/navigation";
import HorizontalNavigationContent from "@/component/layout/navigation/part/HorizontalNavigationContent";

export default function SubHorizontalNavigationContent({
    hasChildren,
    dataNavigation,
    buttonName,
    parentIcon,
    link,
}:{
    hasChildren?: number;
    dataNavigation?: VerticalNavigationProps[] ;
    buttonName?: string;
    parentIcon?: React.ReactNode;
    link?: string;
}) {
    const [active,setActive] = useState(false)
    const router = usePathname();
    return (
        <div className={"flex flex-col gap-4"}>
            <button
                onClick={()=> setActive(!active)}
                className={`${router.includes(link as string) ? "text-secondary rounded-md hover:text-primary":"hover:text-secondary"} 
                        ${router.includes(link as string)
                    ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                    : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                }
                        relative inline-flex justify-between font-semibold text-base px-3 py-1 
                        lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-secondary lg:after:transition-transform lg:after:duration-400 lg:after:transform`}
            >
                <div className={`flex items-center max-w-36`}>
                    {parentIcon}
                    <span className={`ml-4`}>{buttonName}</span>
                </div>
                <div className={`${active?"rotate-0":"rotate-90"} absolute size-4 right-0 hover:text-white transition-all duration-300`}>
                    <HiChevronDown className={"size-5"}/>
                </div>
            </button>
            {hasChildren && (
                <div
                    className={`w-full flex flex-col overflow-hidden transition-all duration-1000 ${active ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <HorizontalNavigationContent dataNavigation={dataNavigation}/>
                </div>
            )}
        </div>
    );
}