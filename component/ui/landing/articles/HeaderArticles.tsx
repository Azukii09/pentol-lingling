'use client'
import React from 'react';
import {roboto} from "@/lib/font/font";
import {motion} from "framer-motion";
import Button from "@/app/component/util/Button";
import Image from "next/image";

export default function HeaderArticles() {
    return (
        <section className={`${roboto.className} relative py-10 md:py-28 overflow-hidden min-h-[calc(100vh-80px)] bg-gradient-to-r from-teal-400 to-purple-400 text-white -z-10`}>
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="text-4xl md:text-5xl font-bold leading-tight"
                        >
                            Latest <span className="">Articles</span> and News
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.4}}
                            className="mt-6 text-md"
                        >
                            Explore our latest articles and news updates, where we share valuable insights,
                            industry trends, and important information to keep you informed and inspired.
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.6}}
                            className="mt-8 flex flex-row gap-4 justify-center md:justify-start"
                        >
                            <Button
                                buttonType={"button"}
                                variant={"primary"}
                                variantType={"solid-rounded"}
                                buttonName={"get-started"}
                                buttonText={"Get Started"}
                                size={"lg"}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative w-full aspect-square md:aspect-[4/3]">
                            <Image
                                src="/img/gambar.jpg"
                                alt="Business Illustration"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw" // <-- Add this line
                            />
                            <div
                                className="absolute inset-0 bg-purple-500/20 rounded-2xl"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}