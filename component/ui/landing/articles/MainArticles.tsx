'use client'
import React, { useState } from 'react';
import TitleArrow from "@/app/component/util/TitleArrow";
import ArticleCard from "@/app/component/ui/landing/articles/ArticleCard";
import useWindowWidth from "@/app/hook/useWindowWidth";
import Button from "@/app/component/util/Button";

export default function MainArticles() {
    const width = useWindowWidth()
    const [showAll, setShowAll] = useState(false)
    
    // Total artikel yang tersedia
    const totalArticles = 12
    const maxInitialArticles = 6
    
    // Tentukan berapa artikel yang akan ditampilkan
    const articlesToShow = showAll ? totalArticles : maxInitialArticles

    return (
        <section className={"w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary"}>
            {/*arrow*/}
            <TitleArrow text={"Articles"} size={width}/>

            {/*title*/}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold">Share Learn Grow Inspire</h1>

            {/*category*/}
            <div className={"flex flex-col gap-4 mt-10 p-4 lg:flex-row items-center justify-center"}>
                <div className={"flex gap-2"}>
                    {[
                        {name: "all", text: "All"},
                        {name: "technology", text: "Technology"},
                        {name: "design", text: "Design"},
                        {name: "business", text: "Business"},
                        {name: "lifestyle", text: "Lifestyle"}
                    ].map((button) => (
                        <Button
                            key={button.name}
                            buttonType={"button"}
                            variant={"primary"}
                            variantType={"solid-rounded"}
                            buttonName={button.name}
                            buttonText={button.text}
                            size={"xs"}
                        />
                    ))}
                </div>
            </div>

            {/*article*/}
            <div className={"grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3"}>
                {[...Array(articlesToShow)].map((_, index) => (
                    <ArticleCard
                        key={index}
                        image={`/img/gambar.jpg`}
                        title={`Article Title ${index + 1}`}
                        description={`This is a sample description for article ${index + 1}. It provides a brief overview of what the article is about and engages readers to click and read more.`}
                    />
                ))}
            </div>
            
            {/* Tombol Load More / Show Less */}
            {totalArticles > maxInitialArticles && (
                <div className="flex justify-center mt-8">
                    <Button
                        buttonType={"button"}
                        variant={"primary"}
                        buttonName={"load-more"}
                        buttonText={showAll ? 'Show Less' : `Load More Articles (${totalArticles - maxInitialArticles} more)`}
                        size={"sm"}
                        variantType={"solid-rounded"}
                        handler={() => setShowAll(!showAll)}
                    />
                </div>
            )}
        </section>
    );
}