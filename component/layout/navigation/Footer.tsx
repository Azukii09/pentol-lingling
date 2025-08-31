'use client'
import React from 'react';
import {address, companyName, email, phone} from "@/lib/data/content/companyData";
import {HiEnvelope} from "react-icons/hi2";
import {HiMap, HiPhone} from "react-icons/hi";
import {FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import {useParams} from "next/navigation";
import {landingNavigationData} from "@/lib/data/navigation/landing_navigation";

export default function Footer() {
    const params = useParams();
    const dataNavigation =  landingNavigationData.find((item) => item.locale === params.locale);
    return (
        <footer className={"bg-zinc-800 text-white h-full global-padding py-6 gap-4"}>
            {/*footer content*/}
            <div className={"flex justify-between flex-col md:flex-row gap-4"}>
                {/*first*/}
                <div className={"flex gap-4 flex-col w-full md:w-1/3"}>
                    <div className={""}>
                        {companyName}
                    </div>
                    <div className={"flex flex-col gap-4 pl-4"}>
                        {/*email*/}
                        <div className={" flex gap-2 items-center"}>
                            <div className={"flex justify-center items-center"}>
                                <HiEnvelope className={"size-6"} />
                            </div>
                            <span className={" text-md md:text-sm"}>{email}</span>
                        </div>
                        {/*wa*/}
                        <div className={" flex gap-2 items-center"}>
                            <div className={"flex justify-center items-center"}>
                                <HiPhone className={"size-6"} />
                            </div>
                            <span className={" text-md md:text-sm"}>{phone}</span>
                        </div>
                        {/*alamat*/}
                        <div className={" flex gap-2 items-center"}>
                            <div className={"flex justify-center items-center"}>
                                <HiMap className={"size-6"} />
                            </div>
                            <span className={" text-md md:text-sm"}>{address}</span>
                        </div>
                    </div>
                </div>
                <hr className="flex md:hidden border-t border-white my-2" />

                {/*middle*/}
                <div className={"flex gap-4 flex-col md:flex-row w-full md:w-1/3"}>
                    <div className={"w-1/2 flex flex-col gap-2"}>
                        <h2 className={" font-bold text-md"}>Navigasi cepat</h2>
                        <ul className={"flex flex-col gap-2 text-sm "}>
                            {dataNavigation?.navigation.map((item, index) => (
                                <li key={index}>→ {item.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={"w-1/2 flex flex-col gap-2"}>
                        <h2 className={" font-bold text-md"}>Ingin tahu lebih lanjut?</h2>
                        <ul className={"flex flex-col gap-2 text-sm "}>
                            <li>Mari saling mengenal dan buat jadwal untuk konsultasi</li>
                        </ul>
                    </div>
                </div>
                <hr className="flex md:hidden border-t border-white my-2" />

                {/*end*/}
                <div className={"flex gap-2 flex-col w-full md:flex-row md:w-fit md:justify-end"}>
                    <div className={"flex gap-2 flex-col"}>
                        <h2 className={" font-bold text-md"}>Sosial Media</h2>
                        <div className={"flex gap-4"}>
                            <div className={"bg-zinc-200 text-zinc-600 lg:text-main size-8 rounded-md p-1"}>
                                <FaWhatsapp className={"size-6"} />
                            </div>
                            <div className={"bg-zinc-200 text-zinc-600 lg:text-main size-8 rounded-md p-1"}>
                                <FaInstagram className={"size-6"} />
                            </div>
                            <div className={"bg-zinc-200 text-zinc-600 lg:text-main size-8 rounded-md p-1"}>
                                <FaLinkedinIn className={"size-6"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*copyright*/}
            <div className={"mt-8"}>
                <hr className="border-t border-white my-2" />
                <div className="flex items-center justify-center space-x-2 px-4 py-2 text-sm ">
                    © 2025 {companyName}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}