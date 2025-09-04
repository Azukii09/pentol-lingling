"use client"
import React, {useState} from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { HiEnvelope, HiMap, HiPhone } from "react-icons/hi2";
import { address, email, phone, social } from "@/lib/data/content/companyData";
import Link from "next/link";
import Button from "@/component/util/Button";
import { motion, Variants } from "framer-motion";

// Animasi utama (fade up) Reason style
const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

// Parent: untuk stagger children konten Reason style
const gridParentVariant: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.20,
            delayChildren: 0.5,
        },
    },
};

// Item: fade down Reason style
const fadeDownVariant: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function ContactUs() {
    // State per field
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        tujuanAwal: "",
        tujuanAkhir: "",
        layanan: "",
        catatan: ""
    });

// Handle perubahaan input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

// Gabungkan jadi string format siap kirim
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const pesan =
            `Halo Admin, saya ingin menghubungi Anda untuk konsultasi pengiriman.

Nama Depan: ${form.firstName}
Nama Belakang: ${form.lastName}
Email: ${form.email}
Telepon: ${form.phone}
Tujuan Awal: ${form.tujuanAwal}
Tujuan Akhir: ${form.tujuanAkhir}
Layanan: ${form.layanan}
Catatan: ${form.catatan}`;

        // Redirect ke WhatsApp (bisa juga copy ke clipboard jika mau)
        const waUrl = `${social.whatsapp}?text=${encodeURIComponent(pesan)}`;
        window.open(waUrl, "_blank");
    };
    return (
        <motion.div
            id="contact"
            className="global-padding py-20 flex flex-col gap-8 text-wording"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            variants={fadeUpVariant}
        >
            <div className="flex flex-col gap-16">
                {/*content*/}
                <motion.div
                    className="flex flex-col lg:flex-row bg-white w-full rounded-lg shadow-lg shadow-slate-500"
                    variants={gridParentVariant}
                >
                    <motion.div
                        className="flex gap-3 lg:gap-4 flex-col rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg w-full border-b border-tertiary lg:border-b-0 lg:border-r p-8 lg:w-2/3"
                        variants={fadeDownVariant}
                    >
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
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="capitalize text-black-text">Tujuan Awal</span>
                                    <input
                                        name="tujuanAwal"
                                        value={form.tujuanAwal}
                                        onChange={handleChange}
                                        className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                        placeholder="Masukan Tujuan Awal"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="capitalize text-black-text">Tujuan Akhir</span>
                                    <input
                                        name="tujuanAkhir"
                                        value={form.tujuanAkhir}
                                        onChange={handleChange}
                                        className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                        placeholder="Masukan Tujuan Akhir"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <span className="capitalize text-black-text">Jenis Layanan yang Ingin di Pesan</span>
                                <input
                                    name="layanan"
                                    value={form.layanan}
                                    onChange={handleChange}
                                    className="rounded-lg ring-1 ring-tertiary bg-contras py-2 px-6 focus:outline-0 focus:ring-primary focus:ring-2"
                                    placeholder="Pilih Layanan"
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
                        variants={gridParentVariant}
                    >
                        <motion.div
                            className="flex flex-col p-6 w-full items-center justify-center bg-primary text-wording-white rounded-lg gap-2"
                            variants={fadeDownVariant}
                        >
                            <HiEnvelope className="size-8" />
                            <span>{email}</span>
                        </motion.div>
                        <motion.div
                            className="flex flex-col p-6 w-full items-center justify-center bg-primary text-wording-white rounded-lg gap-2"
                            variants={fadeDownVariant}
                        >
                            <HiPhone className="size-8" />
                            <span>
                                {phone}
                            </span>
                        </motion.div>
                        <motion.div
                            className="flex flex-col p-6 w-full items-center justify-center bg-primary text-wording-white rounded-lg gap-2"
                            variants={fadeDownVariant}
                        >
                            <HiMap className="size-6" />
                            <div className="text-center align-middle">
                                <span>Kantor Pusat - {address}</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex flex-col p-6 w-full items-center justify-center bg-primary text-wording-white rounded-lg gap-2"
                            variants={fadeDownVariant}
                        >
                            <div className="flex gap-2">
                                <Link href={social.instagram} className="cursor-pointer">
                                    <FaInstagram className="size-8" />
                                </Link>
                                <Link href={social.whatsapp} className="cursor-pointer">
                                    <FaWhatsapp className="size-8" />
                                </Link>
                                <Link href={social.linkedin} className="cursor-pointer">
                                    <FaLinkedinIn className="size-8" />
                                </Link>
                            </div>
                            <span>Our Social Media</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ContactUs;