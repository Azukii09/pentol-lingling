import React from 'react';
import {VerticalNavigationProps} from "@/lib/type/navigation";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SubHorizontalNavigationContent from "@/component/layout/navigation/SubHorizontalNavigationContent";

export default function HorizontalNavigationContent({
    dataNavigation,
}:{
    dataNavigation?: VerticalNavigationProps[];
}) {
    const router = usePathname();
    return (
        <div className={"w-full flex flex-col pl-5 font-semibold"}>
            {dataNavigation?.map((item, index) => (
                item.navigation && item.navigation.length ?
                    // nested navigation
                    <SubHorizontalNavigationContent
                        key={index}
                        dataNavigation={item.navigation}
                        buttonName={item.name}
                        hasChildren={item.navigation && item.navigation.length}
                        parentIcon={item.icon}
                        link={item.link}
                    />
                    :
                    // without children
                    <Link
                        key={index}
                        href={item.link}
                        className={`
                                        ${router.includes(item.link) ? "text-secondary rounded-md hover:text-primary":"hover:text-secondary"} 
                                        ${router.includes(item.link)
                            ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                            : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                        }
                                        relative inline-flex justify-between font-bold px-3 py-1 
                                        lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-secondary lg:after:transition-transform lg:after:duration-400 lg:after:transform
                                    `}
                    >
                        <div className={`flex items-center max-w-36`}>
                            {item.icon}
                            <span className={`ml-4`}>{item.name}</span>
                        </div>
                    </Link>
            ))}
        </div>
    );
}