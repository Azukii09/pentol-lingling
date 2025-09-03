"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageSeparatedSection({
    text,
    img
}: {
    img: string,
    text: string
}) {
    return (
        <motion.div
            className={"w-full h-full pt-20"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // animasi hanya saat pertama kali masuk 30% viewport
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className={`flex flex-col relative w-full h-[50vh]`}>
                <div className={"z-20 w-full h-full bg-zinc-800/70 absolute"}></div>
                <Image src={img} alt={"eiffel night"} className={"object-cover object-center w-full h-full"} fill/>
                <div className={"absolute flex flex-col gap-8 justify-center items-center w-full h-full px-10 lg:px-26 z-30"}>
                    <h2 className={"text-white text-md md:text-xl lg:text-2xl capitalize italic text-center font-semibold"}>{text}</h2>
                </div>
            </div>
        </motion.div>
    );
}