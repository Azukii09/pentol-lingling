import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import SubVerticalNavigationContent from "@/component/layout/navigation/SubVerticalNavigationContent";
import {VerticalNavigationProps} from "@/lib/type/navigation";

export default function VerticalNavigationContent({
    dataNavigation,
}:{
    dataNavigation?: VerticalNavigationProps[];
}) {
    const hasChildren = dataNavigation && dataNavigation.length
    const router = usePathname();
    return (
        <div className={"w-full flex flex-col pl-5 font-semibold"}>
            {dataNavigation?.map((item, index) => (
                item.navigation && item.navigation.length ?
                    // nested navigation
                    <SubVerticalNavigationContent
                        key={index}
                        dataNavigation={item.navigation}
                        buttonName={item.name}
                        hasChildren={hasChildren}
                        parentIcon={item.icon}
                        link={item.link}
                    />
                    :
                    // without children
                    <div
                        key={index}
                        className={`${router.endsWith(item.link) && "text-tertiary bg-primary/30 rounded-md"} hover:text-white hover:bg-primary/80 hover:rounded-md  px-3 py-1 w-full flex flex-col group cursor-pointer mb-4`}
                    >
                        <Link
                            href={item.link}
                            className={"inline-flex items-center justify-between w-full font-bold"}
                        >
                            <div className={`flex gap-4 items-center group-hover:text-white`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    </div>
            ))}
        </div>
    );
}