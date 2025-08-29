import React from 'react';
import Image from "next/image";
import Button from "@/app/component/util/Button";
import {MdReadMore} from "react-icons/md";

export default function ServiceCard({
    image,
    title,
    description,
}:{
    image: string;
    title: string;
    description: string;
}) {
    return (
        <div className={"flex flex-col gap-4 bg-primary/40 rounded-xl p-4 items-center relative mb-12"}>
            <div className={"relative bg-secondary h-80 w-full rounded-xl"}>
                <Image
                    src={image || "/img/gambar.jpg"}
                    alt={title}
                    fill
                    className={"object-cover rounded-lg"}
                    sizes="(min-width: 1024px) 50vw, 100vw" // <-- Add this line
                />
            </div>
            <h3 className="text-2xl text-center font-semibold tracking-wider capitalize">{title}</h3>
            <p className="text-justify leading-relaxed mx-4 mb-8">{description}</p>
            <div className={"absolute -bottom-6 flex justify-center gap-4 bg-white w-fit rounded-full"}>
                <Button buttonType={"button"} variant={"primary"} variantType={"solid-rounded"} buttonName={"cta"} buttonText={"Detail"} size={"md"} icon={<MdReadMore className={"size-6"}/>} customClass={"flex-row-reverse"}/>
            </div>
        </div>
    );
}