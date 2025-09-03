import React from 'react';
import Image from "next/image";

export default function ProductCard({
    image,
    title,
    description,
    qty
}:{
    image: string;
    title: string;
    description: string;
    qty: string;
}) {
    return (
        <div className={"flex flex-col gap-4 items-center relative mb-12 hover:shadow-sm hover:shadow-slate-400 group cursor-pointer"}>
            <div
                className={"relative w-full rounded-xl aspect-square drop-shadow-xl drop-shadow-slate-500 group-hover:drop-shadow-none"}>
                <Image
                    src={image || "/img/logo.png"}
                    alt={title}
                    fill
                    className={"object-cover transition-transform duration-300 hover:scale-110"}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl text-center font-semibold tracking-wider capitalize">{title}</h3>
            <p className="text-xs sm:text-sm md:text-base text-justify leading-relaxed mx-4">{description}</p>
            <h3 className="text-md sm:text-lg md:text-xl text-center font-semibold capitalize mb-8 text-rose-600 italic">{qty}</h3>
        </div>
    );
}