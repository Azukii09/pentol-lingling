"use client"
import React, {useState} from 'react';
import NavigationContent from "@/app/_component/layout/Navbar/NavigationContent";
import {NavigationDataProps} from "@/lib/data/navigation/navigationData";
import {usePathname} from "next/navigation";
import {HiChevronDown} from "react-icons/hi2";

export default function SubNavigation({
    hasChildren,
    dataSidebar,
    buttonName,
    parentIcon,
    parentLink,
}:{
    hasChildren?: number;
    dataSidebar?: NavigationDataProps[];
    buttonName?: string;
    parentIcon?: React.ReactNode;
    parentLink?: string;
}) {
    const [active,setActive] = useState(false)
    const router = usePathname();

    return (
        <div className={"flex flex-col lg:relative"}>
            <button
                onClick={()=> setActive(!active)}
                className={`hover:text-title hover:bg-light-background hover:rounded-md px-3 py-1 rounded-md w-full flex flex-col group cursor-pointer font-bold
                
                relative lg:items-center lg:justify-between  lg:hover:bg-dark-background
                
                lg:after:origin-left lg:px-0 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-borderline lg:after:transition-transform lg:after:duration-400 lg:after:transform
                
                ${router.includes(parentLink as string)
                    ? "text-title bg-light-background rounded-md lg:bg-dark-background lg:text-wording lg:after:scale-x-100 lg:hover:after:scale-x-0"
                    : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                }
                
                
                
                `}
            >
                <div className={`flex items-center max-w-36`}>
                    <span className={`block lg:hidden`}>
                        {parentIcon}
                    </span>
                    <span className={`
                        ${router.includes(parentLink as string)
                        ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                        : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                    }
                        ml-4 lg:ml-0 lg:group-hover:text-wording
                    `}>{buttonName}</span>
                </div>
                <div className={`${active?"rotate-0":"rotate-90"} absolute lg:hidden size-4 right-7 hover:text-admin-sidebar-text transition-all duration-300`}>
                    <HiChevronDown className={"size-5"}/>
                </div>
            </button>
            {hasChildren && (
                <div
                    className={`
                        pl-5 gap-4 w-full flex flex-col overflow-hidden transition-all duration-1000 ${active ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'}
                        lg:absolute lg:bg-dark-background lg:border lg:border-borderline lg:text-wording-white lg:top-12 lg:text-nowrap lg:w-fit lg:rounded-xl lg:shadow-sm lg:z-50 lg:left-0 lg:gap-4 lg:shadow-dark-background lg:pl-3 lg:p-3
                    `}
                >
                    <NavigationContent dataSidebar={dataSidebar}/>
                </div>
            )}
        </div>
    );
}

