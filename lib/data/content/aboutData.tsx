import {GoDotFill} from "react-icons/go";
import React from "react";

export const aboutData = [
    {
        id:1,
        locale:"id",
        data:{
            aboutDescription:[
                `Pentol Ling Ling adalah brand kuliner yang lahir di Kepohbaru, Bojonegoro, Jawa Timur sejak Februari 2024. Sampai sekarang, Pentol Ling Ling konsisten menghadirkan produk kuliner sehat tanpa bahan pengawet, dengan harga yang ramah dan cocok untuk segala usia. Berawal dari cita-cita sederhana untuk menjadi ikon kuliner Indonesia, Pentol Ling Ling membawa visi besar: menghadirkan usaha yang berkah dan barokah tanpa riba, sekaligus membuka peluang usaha bagi masyarakat luas melalui sistem agen dan reseller.`,
                "Dengan berbagai produk seperti pentol ayam, pentol sapi, dimsum siomay, tahu bakso, pangsit ayam, chili oil, hingga bumbu kuah bakso, Pentol Ling Ling telah dipercaya oleh café, resto, frozen food, sekolah, hingga berbagai event. Lebih dari sekadar produk kuliner, Pentol Ling Ling berkomitmen melahirkan pengusaha-pengusaha baru yang mampu bersaing di masa depan, menjaga inovasi, dan memberikan dampak positif bagi Indonesia."],
            visi:{
                title:"Visi",
                description:"Menjadi brand nasional yang berkah dan barokah serta dikenal sebagai ikon kuliner Indonesia yang menghadirkan usaha tanpa riba.",
            },
            misi:{
                title:"Misi",
                detail:[
                    {
                        icon:<GoDotFill className={"size-8"}/>,
                        description:"Menciptakan sistem yang sehat untuk melahirkan para pengusaha baru yg dapat bersaing di masa yg akan datang.",
                    },
                    {
                        icon:<GoDotFill className={"size-7"}/>,
                        description:"Menyediakan produk tanpa pengawet, dengan harga yg kompetitif dan sesuai kebutuhan pasar.",
                    },
                    {
                        icon:<GoDotFill className={"size-4"}/>,
                        description:"Memberikan peluang usaha bagi masyarakat luas tanpa riba.",
                    },
                    {
                        icon:<GoDotFill className={"size-4"}/>,
                        description:"Menjaga komitmen terhadap inovasi dan keberkahan.",
                    },
                    {
                        icon:<GoDotFill className={"size-6"}/>,
                        description:"Menjadi pabrik pangan nasional yang dapat memperluas dampak positif di indonesia.",
                    }
                ],
            }
        }
    },
    {
        id:2,
        locale:"en",
        data:{
            aboutDescription:[`
                Pentol Ling Ling is a culinary brand founded in Kepohbaru, Bojonegoro, East Java, since February 2024. To this day, Pentol Ling Ling has consistently delivered healthy and preservative-free culinary products at affordable prices, suitable for all ages. Starting with a simple dream to become an icon of Indonesian cuisine, Pentol Ling Ling carries a strong vision: building a blessed and riba-free business, while creating opportunities for communities through its agent and reseller system.`,
                "Offering a wide variety of products such as chicken pentol, beef pentol, dim sum siomay, tofu meatballs, chicken wontons, chili oil, and bakso soup seasoning, Pentol Ling Ling has been trusted by cafés, restaurants, frozen food outlets, schools, and even large events. More than just food, Pentol Ling Ling is committed to fostering new entrepreneurs, driving continuous innovation, and spreading positive impact across Indonesia."],
            visi: {
                title: "Vision",
                description: "To become a blessed national brand and be known as an Indonesian culinary icon that delivers riba-free business.",
            },
            misi: {
                title: "Mission",
                detail: [
                    {
                        icon: <GoDotFill className={"size-8"}/>,
                        description: "Create a healthy system to produce new entrepreneurs who can compete in the future.",
                    },
                    {
                        icon: <GoDotFill className={"size-8"}/>,
                        description: "Provide preservative-free products at competitive prices that meet market needs.",
                    },
                    {
                        icon: <GoDotFill className={"size-6"}/>,
                        description: "Provide business opportunities for the wider community without riba.",
                    },
                    {
                        icon: <GoDotFill className={"size-5"}/>,
                        description: "Maintain commitment to innovation and blessings.",
                    },
                    {
                        icon: <GoDotFill className={"size-7"}/>,
                        description: "Become a national food factory that can expand positive impact in Indonesia.",
                    }
                ],
            }
        }
    },
]

export const aboutImg = "/img/logo.png"