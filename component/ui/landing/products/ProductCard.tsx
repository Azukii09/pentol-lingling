import React from 'react';
import Image from "next/image";

export default function ProductCard({
    image,
    title,
    description,
}:{
    image: string;
    title: string;
    description: string;
}) {
    return (
        <div className={"flex flex-col gap-4 items-center relative mb-12"}>
            <div className={"relative w-full rounded-xl aspect-square drop-shadow-md drop-shadow-slate-500"}>
                <Image
                    src={image || "/img/logo.png"}
                    alt={title}
                    fill
                    className={"object-cover rounded-lg"}
                    sizes="(min-width: 1024px) 50vw, 100vw" // <-- Add this line
                />
                <div
                    className="absolute inset-1 bg-rose-400 rounded-full -z-10"/>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold tracking-wider capitalize">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed mx-4 mb-8">{description}</p>
        </div>
    );
}