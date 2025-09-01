import React from 'react';
import Link from "next/link";
import {useParams, usePathname} from "next/navigation";
import {landingNavigationData} from "@/lib/data/navigation/landing_navigation";
import HorizontalNavigationContent from "@/component/layout/navigation/part/HorizontalNavigationContent";
import { poppins} from "@/lib/font/font";

export default function DesktopNavigation() {
    const router = usePathname();
    const params = useParams();
    const dataNavigation =  landingNavigationData.find((item) => item.locale === params.locale);
    return (
        <div className={`${poppins.className} flex gap-4`}>
            {dataNavigation?.navigation?.map((item,index) => {
                const activeLink = (router.endsWith(item.link));
                return(
                    item.navigation && item.navigation.length ?
                        <div className={"group cursor-pointer"}
                        key={index}>
                            <div
                                className={`
                                ${router.includes(item.link) ? "text-primary rounded-md hover:text-primary":"hover:text-primary"} 
                                ${router.includes(item.link)
                                    ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                                    : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                                }
                                relative inline-flex justify-between font-semibold text-base px-3 py-1 
                                lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-primary lg:after:transition-transform lg:after:duration-400 lg:after:transform
                            `}
                            >
                                {item.name}
                            </div>
                            <div className={"absolute group-hover:flex bg-white pt-4 text-quaternary top-full right-0 text-nowrap w-full scale-y-0  group-hover:scale-y-100 transition-all duration-400 origin-top opacity-0 group-hover:opacity-100 rounded-b-sm"}>
                                <div className={"w-full h-full px-8 py-4 border-1 border-slate-200 rounded-b-md shadow-sm shadow-slate-200"}>
                                    <div className={"w-full overflow-y-scroll max-h-96"}>
                                        <HorizontalNavigationContent dataNavigation={item.navigation}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                ${activeLink ? "text-primary rounded-md hover:text-primary":"hover:text-primary"} 
                                ${activeLink
                                ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                                : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                            }
                                relative inline-flex items-center justify-between font-semibold text-base px-3 py-1 
                                lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-primary lg:after:transition-transform lg:after:duration-400 lg:after:transform
                            `}
                        >
                            {item.name}
                        </Link>
                )})}
        </div>
    );
}