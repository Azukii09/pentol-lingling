"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import {amatic_sc} from "@/lib/font/font";

export default function PageSeparatedSection({
    text,
    img,
    children,
}: {
    img: string,
    text: string,
    children?: React.ReactNode,
}) {
    return (
        <motion.div
            className={"w-full h-full pt-20"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // animasi hanya saat pertama kali masuk 30% viewport
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className={`flex flex-col relative w-full min-h-[50vh]`}>
                <div className={"z-20 w-full h-full bg-zinc-800/70 absolute"}></div>
                <Image src={img} alt={"image"} className={"object-cover object-center w-full h-full"} fill/>
                <div className={`${!children && "px-10 lg:px-26"} absolute flex flex-col gap-8 justify-center items-center w-full h-full z-30`}>
                    {children ? children : <h2 className={`${amatic_sc.className} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  capitalize italic text-center font-semibold`}>{text}</h2>}
                </div>
            </div>
        </motion.div>
    );
}