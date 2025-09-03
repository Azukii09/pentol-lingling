'use client'
import React, {useState} from 'react';
import TitleArrow from "@/component/util/TitleArrow";
import useWindowWidth from "@/hook/useWindowWidth";
import ProductCard from "@/component/ui/landing/products/ProductCard";
import {amatic_sc} from "@/lib/font/font";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {productsData} from "@/lib/data/content/productsData";
import {useParams} from "next/navigation";
import Button from "@/component/util/Button";

export default function MainProducts() {
    const width = useWindowWidth()
    const tProduct = useTranslations('Product')
    const params = useParams();
    const data = productsData.find((item) => item.locale === params.locale);

    // Add state for visible items
    const [visibleItems, setVisibleItems] = useState(4);

    // Handle load more
    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 4);
    };

    return (
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

            <motion.div
                className={"grid grid-cols-2 gap-8 mt-10 md:grid-cols-3 lg:grid-cols-4"}
            >
                {data?.data.slice(0, visibleItems).map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: -50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, margin: "-100px"}}
                        transition={{
                            duration: 0.5,
                            delay: (index % 8) * 0.2, // Reset delay for each new batch
                            type: "spring",
                            bounce: 0.4,
                            stiffness: 70
                        }}
                    >
                        <ProductCard
                            image={item.img}
                            title={item.title}
                            description={item.description}
                            qty={item.qty}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Load More Button */}
            {data?.data &&  data?.data.length> visibleItems && (
                <motion.div
                    className="flex justify-center mt-8"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <Button
                        buttonType={"button"}
                        variant={"danger"}
                        buttonName={"load-more"}
                        buttonText={"Load More"}
                        variantType={"solid-rounded"}
                        size={"sm"}
                        handler={() => handleLoadMore()}
                    />
                </motion.div>
            )}
        </section>
    );
}