'use client'
import React from 'react';
import TitleArrow from "@/app/component/util/TitleArrow";
import useWindowWidth from "@/app/hook/useWindowWidth";
import ServiceCard from "@/app/component/ui/landing/services/ServiceCard";
import {dumyServices} from "@/lib/data/content/dumyServices";

export default function MainServices() {
    const width = useWindowWidth()

    return (
        <section className={"w-full global-padding mx-auto py-6 min-h-[calc(100vh-80px)] text-quaternary"}>
            <TitleArrow text={"our services"} size={width}/>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold">Create
                Digital Solutions Together</h1>
            <div className={"grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3"}>
                {dumyServices.map((item, index) => (
                    <ServiceCard
                        key={index}
                        image={item.img}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}