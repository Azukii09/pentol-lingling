"use client"
import React, {useState} from 'react';
import {FaFacebook, FaInstagram, FaTiktok, FaWhatsapp} from "react-icons/fa6";
import {HiEnvelope, HiMap, HiPhone} from "react-icons/hi2";
import {address, email, phone, social} from "@/lib/data/content/companyData";
import Link from "next/link";
import Button from "@/component/util/Button";
import {motion} from "framer-motion";

function ContactUs() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        alamat: "",
        catatan: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const pesan =
            `Halo Admin, saya ingin menghubungi Anda untuk konsultasi mengenai produk dari pentol ling ling.

Nama Depan: ${form.firstName}
Nama Belakang: ${form.lastName}
Email: ${form.email}
Telepon: ${form.phone}
Alamat: ${form.alamat}
Catatan: ${form.catatan}

Terima kasih, dan mohon bantuan Anda.`;

        const waUrl = `${social.whatsapp}?text=${encodeURIComponent(pesan)}`;
        window.open(waUrl, "_blank");
    };

    return (
        <motion.div
            className="global-padding py-20 flex flex-col gap-8 text-quaternary"
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false, amount: 0.35}}
            transition={{duration: 0.7, ease: "easeOut"}}
        >
            <div className="flex flex-col gap-16">
                <motion.div
                    className="flex flex-col lg:flex-row bg-white w-full rounded-lg shadow-md shadow-slate-500"
                    initial={{}}
                    whileInView={{
                        transition: {
                            staggerChildren: 0.20,
                            delayChildren: 0.5,
                        }
                    }}
                >
                    <motion.div
                        className="flex gap-3 lg:gap-4 flex-col rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg w-full border-b border-tertiary lg:border-b-0 lg:border-r p-8 lg:w-2/3"
                        initial={{opacity: 0, y: -60}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                    >
                        {/* Form content remains the same */}
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="capitalize text-black-text">Nama Depan</span>
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                        placeholder="Nama Depan"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="capitalize text-black-text">Nama Belakang</span>
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                        placeholder="Masukan Nama Belakang"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="capitalize text-black-text">Email</span>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                        placeholder="Masukan Email"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="capitalize text-black-text">Nomer Telepon</span>
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                        placeholder="Masukan Nomer Telepon"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <span className="capitalize text-black-text">Alamat</span>
                                <input
                                    name="alamat"
                                    value={form.alamat}
                                    onChange={handleChange}
                                    className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                    placeholder="Masukan Alamat"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <span className="capitalize text-black-text">Catatan</span>
                                <textarea
                                    name="catatan"
                                    value={form.catatan}
                                    onChange={handleChange}
                                    className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                    placeholder="Masukan Catatan"
                                />
                            </div>
                            <div className="flex w-full justify-center">
                                <Button
                                    buttonType="submit"
                                    variant="primary"
                                    variantType="solid-rounded"
                                    buttonName="contact-us"
                                    buttonText="Hubungi Kami"
                                    size="lg"
                                />
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-4 items-center justify-between rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg w-full p-8 lg:w-1/3"
                        initial={{}}
                        whileInView={{
                            transition: {
                                staggerChildren: 0.20,
                                delayChildren: 0.5,
                            }
                        }}
                    >
                        {[
                            {icon: <HiEnvelope className="size-8"/>, content: email},
                            {icon: <HiPhone className="size-8"/>, content: phone},
                            {icon: <HiMap className="size-6"/>, content: `Kantor Pusat - ${address}`},
                            {
                                icon: (
                                    <div className="flex gap-2">
                                        <Link href={social.instagram} className="cursor-pointer" target={"_blank"}>
                                            <FaInstagram className="size-8"/>
                                        </Link>
                                        <Link href={social.whatsapp} className="cursor-pointer" target={"_blank"}>
                                            <FaWhatsapp className="size-8"/>
                                        </Link>
                                        <Link href={social.facebook} className="cursor-pointer" target={"_blank"}>
                                            <FaFacebook className={"size-6"} />
                                        </Link>
                                        <Link href={social.tiktok} className="cursor-pointer" target={"_blank"}>
                                            <FaTiktok className={"size-6"} />
                                        </Link>
                                    </div>
                                ),
                                content: "Our Social Media"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col p-6 w-full items-center justify-center bg-rose-500 text-white rounded-lg gap-2"
                                initial={{opacity: 0, y: -60}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, ease: "easeOut"}}
                            >
                                {item.icon}
                                <div className="text-center align-middle">
                                    <span>{item.content}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ContactUs;