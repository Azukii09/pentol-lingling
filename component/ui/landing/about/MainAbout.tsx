'use client'
import React from 'react';
import useWindowWidth from "@/hook/useWindowWidth";
import TitleArrow from "@/component/util/TitleArrow";
import {amatic_sc, poppins} from "@/lib/font/font";
import {useTranslations} from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MainAbout() {
    const width = useWindowWidth()
    const tAbout = useTranslations('About')
    return (
        <section className={`${poppins.className} w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary`}>
            <motion.div
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.8}}
            >
                <TitleArrow text={tAbout('about')} size={width}/>
                <h1 className={`${amatic_sc.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold`}>
                {tAbout('learnMore')} <span className={"text-rose-600"}>{tAbout('about')}</span>
                </h1>
            </motion.div>
            <div className={"flex flex-col gap-4 mt-10 p-4 lg:flex-row items-center justify-between"}>
                {/* Right Image */}
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative w-full aspect-square md:aspect-1">
                        <Image
                            src="/img/logo.png"
                            alt="Business Illustration"
                            fill
                            className="object-cover rounded-2xl"
                            priority
                            sizes="(min-width: 1024px) 50vw, 100vw" // <-- Add this line
                        />
                        <div
                            className="absolute inset-0 bg-green-700 rounded-lg -z-10"/>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}