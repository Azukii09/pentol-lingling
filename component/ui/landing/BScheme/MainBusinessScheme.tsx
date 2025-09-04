'use client'
import React from 'react';
import {amatic_sc, poppins} from "@/lib/font/font";
import {motion} from "framer-motion";
import TitleArrow from "@/component/util/TitleArrow";
import useWindowWidth from "@/hook/useWindowWidth";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {BusinessSchemeData} from "@/lib/data/content/BusinessScheme";

export default function MainBusinessScheme() {
    const width = useWindowWidth()
    const tBScheme = useTranslations('BusinessScheme')

    const tSchedule = useTranslations('Schedule')

    const params = useParams();
    const data = BusinessSchemeData.find((item) => item.locale === params.locale);
    return (
        <section id={"scheme"} className={`${poppins.className} w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary`}>
            {/*title scheme*/}
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

            {/*scheme*/}
            <div className={"flex flex-col gap-8 mt-2 p-4 lg:flex-row items-center justify-between"}>
                <div className={"flex flex-col gap-8 p-4 lg:flex-row lg:items-stretch items-center justify-between"}>
                    {data?.data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: -100}}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{once: false, margin: "-100px"}}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                bounce: 0.4,
                                stiffness: 70
                            }}
                            className={`bg-slate-50 text-quaternary font-semibold w-full  flex flex-col gap-4 justify-between items-center p-8 shadow-md shadow-slate-500`}
                        >
                            <div className={"flex justify-center items-center bg-rose-500 rounded-full p-4 text-white"}>
                                {item.icon}
                            </div>
                            <motion.h1
                                initial={{opacity: 0, y: -20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: false}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2
                                }}
                                className={`${amatic_sc.className} text-4xl`}
                            >
                                {item.title}
                            </motion.h1>
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: false}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4
                                }}
                                className={"text-justify"}
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/*title schedule*/}
            <motion.div
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.8}}
            >
                <TitleArrow text={tSchedule('smallTitle')} size={width}/>
                <h1 className={`${amatic_sc.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold`}>
                    {tSchedule('learnMore')} <span className={"text-rose-600"}>{tSchedule('smallTitle')}</span>
                </h1>
            </motion.div>

            {/*content schedule*/}
            <div>
                <div className={"flex flex-col gap-8 mt-2 p-4 lg:flex-row items-center justify-between"}>a</div>
            </div>

        </section>
    );
}
