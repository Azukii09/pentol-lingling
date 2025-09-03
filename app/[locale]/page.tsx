'use client'
import Hero from "@/component/ui/landing/Hero";
import MainAbout from "@/component/ui/landing/about/MainAbout";
import PageSeparatedSection from "@/component/util/PageSeparatedSection";
import { motion } from "framer-motion";
import TitleArrow from "@/component/util/TitleArrow";
import {amatic_sc} from "@/lib/font/font";
import useWindowWidth from "@/hook/useWindowWidth";
import {useTranslations} from "next-intl";

export default function HomePage() {
    const width = useWindowWidth()
    const tProduct = useTranslations('Product')
    return(
        <>
            <Hero/>
            <MainAbout/>
            <PageSeparatedSection text={"our services"} img={"/img/separator/separator-1.jpg"}/>
            <section className={"w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary"}>
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8}}
                >
                    <TitleArrow text={tProduct('product')} size={width}/>
                    <h1 className={`${amatic_sc.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold`}>
                        {tProduct('learnMore')} <span className={"text-rose-600"}>{tProduct('product')}</span>
                    </h1>
                </motion.div>
            </section>
        </>
    )
}