'use client'
import React from 'react';
import {amatic_sc, poppins} from "@/lib/font/font";
import {motion} from "framer-motion";
import TitleArrow from "@/component/util/TitleArrow";
import useWindowWidth from "@/hook/useWindowWidth";
import {useTranslations} from "next-intl";

export default function MainBusinessScheme() {
    const width = useWindowWidth()
    const tBScheme = useTranslations('BusinessScheme')

    return (
        <section className={`${poppins.className} w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary`}>
            <motion.div
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.8}}
            >
                <TitleArrow text={tBScheme('smallTitle')} size={width}/>
                <h1 className={`${amatic_sc.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold`}>
                    {tBScheme('learnMore')} <span className={"text-rose-600"}>{tBScheme('smallTitle')}</span>
                </h1>
            </motion.div>

        </section>
    );
}
