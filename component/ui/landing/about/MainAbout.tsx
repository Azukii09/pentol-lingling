'use client'
import React from 'react';
import useWindowWidth from "@/hook/useWindowWidth";
import TitleArrow from "@/component/util/TitleArrow";
import {amatic_sc, poppins} from "@/lib/font/font";

export default function MainAbout() {
    const width = useWindowWidth()

    return (
        <section className={`${poppins.className} w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary`}>
            <TitleArrow text={"about us"} size={width}/>
            <h1 className={`${amatic_sc.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold`}>
                Learn More <span className={"text-rose-600"}>About Us</span>
            </h1>
            <div className={"flex flex-col gap-4 mt-10 p-4 lg:flex-row items-center justify-between"}>
                <div className={"w-full lg:w-1/2"}>gambar tes</div>
                <div className={"w-full lg:w-1/2"}>keterangan</div>
            </div>
        </section>
    );
}