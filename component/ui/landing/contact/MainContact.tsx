'use client'
import React from 'react';
import useWindowWidth from "@/hook/useWindowWidth";
import TitleArrow from "@/component/util/TitleArrow";
import {amatic_sc, poppins} from "@/lib/font/font";
import {useTranslations} from "next-intl";
import { motion } from "framer-motion";
import ContactUs from "@/component/ui/landing/contact/ContactUs";

export default function MainContact() {
    const width = useWindowWidth()
    const tContact = useTranslations('Contact')
    return (
        <section id="contact" className={`${poppins.className} w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary`}>
            <motion.div
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.8}}
            >
                <TitleArrow text={tContact('smallTitle')} size={width}/>
                <h1 className={`${amatic_sc.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold`}>
                {tContact('learnMore')} <span className={"text-rose-600"}>{tContact('smallTitle')}</span>
                </h1>
            </motion.div>

            <ContactUs/>
        </section>
    );
}