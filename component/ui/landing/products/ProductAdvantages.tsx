'use client'
import React from 'react';
import {amatic_sc} from "@/lib/font/font";
import {useParams} from "next/navigation";
import {productAdvantages} from "@/lib/data/content/productsData";
import {motion} from "framer-motion";

export default function ProductAdvantages() {
    const params = useParams();
    const data = productAdvantages.find((item) => item.locale === params.locale);

    return (
        <div className={" w-full h-full grid grid-cols-1 md:grid-cols-4"}>
            {data?.data?.map((item, index) => (
                <motion.div
                    key={index}
                    className={`${amatic_sc.className} text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl border-1 border-white flex items-center justify-center p-4 sm:p-6 md:p-8 text-center`}
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: false}}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.3,
                        type: "spring",
                        bounce: 0.4
                    }}
                >
                    {item}
                </motion.div>
            ))}
        </div>
    );
}