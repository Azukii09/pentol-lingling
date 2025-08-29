"use client"
import React, { useState } from 'react';
import NavigationContent from "@/app/_component/layout/Navbar/NavigationContent";
import {navigationData} from "@/lib/data/navigation/navigationData";
import {HiBars4} from "react-icons/hi2";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex gap-4 capitalize relative">
            <HiBars4
                className="size-8 text-wording-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div
                className={`-z-10 fixed inset-0 bg-dark-background/50 transition-opacity duration-700 cursor-pointer ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            />
            <div
                className={`fixed top-16.5 left-0 w-64 h-screen overflow-y-scroll pt-8 pb-24 pr-5 bg-dark-background-secondary text-wording-white shadow-lg transform transition-transform duration-700 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className={"flex items-center flex-col justify-between h-full"}>
                    <div className={"w-full flex flex-col lg:flex-row pl-5 lg:pl-0 gap-4"}>
                        <NavigationContent dataSidebar={navigationData}/>
                    </div>
                    <div className={"w-full px-5 flex items-center justify-between text-xs"}>
                        <div>logo aaa</div>
                        <div>copyright</div>
                    </div>
                </div>
            </div>
        </div>
    );
}