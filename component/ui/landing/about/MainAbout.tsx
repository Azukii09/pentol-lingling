'use client'
import React from 'react';
import useWindowWidth from "@/hook/useWindowWidth";
import TitleArrow from "@/component/util/TitleArrow";
import {amatic_sc, poppins} from "@/lib/font/font";
import {useTranslations} from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import {useParams} from "next/navigation";
import {aboutData, aboutImg} from "@/lib/data/content/aboutData";

export default function MainAbout() {
    const width = useWindowWidth()
    const tAbout = useTranslations('About')
    const params = useParams();
    const data = aboutData.find((item) => item.locale === params.locale);
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
            <div className={"flex flex-col gap-8 mt-10 p-4 lg:flex-row items-center justify-between"}>
                {/* Left Image */}
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        bounce: 0.8
                    }}
                    viewport={{once: false, margin: "-100px"}}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative w-full aspect-square md:aspect-1 shadow-slate-500 shadow-md">
                        <Image
                            src={aboutImg || "/img/gambar.jpg"}
                            alt="Business Illustration"
                            fill
                            className="object-cover rounded-2xl"
                            priority
                            sizes="(min-width: 1024px) 50vw, 100vw" // <-- Add this line
                        />
                        <div
                            className="absolute inset-0 bg-green-700 -z-10"/>
                    </div>
                </motion.div>

                {/*right content*/}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className={"flex flex-col gap-2"}>
                        {data?.data.aboutDescription.map((item, index) => (
                            <motion.p
                                key={index}
                                initial={{opacity: 0, x: 100}}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{once: false, margin: "-100px"}}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.3, // Staggered delay for each paragraph
                                    type: "spring",
                                    bounce: 0.4,
                                    stiffness: 70
                                }}
                                className={"text-justify indent-4 sm:indent-8 text-sm sm:text-base lg:text-lg leading-relaxed"}
                            >
                                {item}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </div>

            <div className={"flex flex-col gap-8 mt-2 p-4 lg:flex-row items-center justify-between"}>
                <div className={"flex flex-col gap-8 p-4 lg:flex-row items-stretch justify-between"}>
                    {/*left content*/}
                    <motion.div
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
                        className={`bg-slate-50 text-quaternary font-semibold w-full md:w-1/2 flex flex-col gap-4 justify-center items-center p-8 shadow-md shadow-slate-500`}
                    >
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
                            {data?.data.visi.title}
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
                            {data?.data.visi.description}
                        </motion.p>
                    </motion.div>

                    {/*right content*/}
                    <motion.div
                        initial={{opacity: 0, x: 100}}
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
                        className={`bg-rose-500 text-white font-semibold w-full md:w-1/2 flex flex-col gap-4 justify-center items-center p-8 shadow-md shadow-slate-500`}
                    >
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
                            {data?.data.misi.title}
                        </motion.h1>
                        <ul className={"text-justify"}>
                            {data?.data.misi.detail.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{opacity: 0, x: 50}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: false}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4 + (index * 0.1),
                                        type: "spring",
                                        bounce: 0.3
                                    }}
                                    className={"flex gap-2"}
                                >
                                    {item.icon}
                                    <p>{item.description}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}