'use client'
import React, {useState} from 'react';
import {HiChevronDown} from "react-icons/hi2";
import VerticalNavigationContent from "@/component/layout/navigation/part/VerticalNavigationContent";
import {usePathname} from "next/navigation";
import {VerticalNavigationProps} from "@/lib/type/navigation";

export default function SubVerticalNavigationContent({
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
                className={`${router.includes(link as string) && "bg-primary/30 text-tertiary"} hover:bg-primary hover:text-white px-3 py-1 rounded-md w-full flex flex-col group cursor-pointer font-bold`}
            >
                <div className={`flex items-center max-w-36`}>
                    {parentIcon}
                    <span className={`ml-4`}>{buttonName}</span>
                </div>
                <div className={`${active?"rotate-0":"rotate-90"} absolute size-4 right-7 hover:text-white transition-all duration-300`}>
                    <HiChevronDown className={"size-5"}/>
                </div>
            </button>
            {hasChildren && (
                <div
                    className={`w-full flex flex-col overflow-hidden transition-all duration-1000 ${active ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <VerticalNavigationContent dataNavigation={dataNavigation}/>
                </div>
            )}
        </div>
    );
}