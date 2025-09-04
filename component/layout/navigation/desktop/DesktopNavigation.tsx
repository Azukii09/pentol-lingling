import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import {landingNavigationData} from "@/lib/data/navigation/landing_navigation";
import HorizontalNavigationContent from "@/component/layout/navigation/part/HorizontalNavigationContent";
import { poppins} from "@/lib/font/font";

export default function DesktopNavigation() {
    const params = useParams();
    const dataNavigation =  landingNavigationData.find((item) => item.locale === params.locale);


    const [hash, setHash] = useState<string>("#hero");
    const navLinks = (dataNavigation?.navigation ?? []).filter(item => item.link.startsWith('#'));

    // Helper: Update hash by scrolling
    useEffect(() => {
        // Handler for scroll event:
        const handleScroll = () => {
            let found = false;
            for (let i = 0; i < navLinks.length; i++) {
                const id = navLinks[i].link.replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                    // Get bounding rect
                    const rect = el.getBoundingClientRect();
                    // Menentukan apakah elemen sudah melewati batas atas viewport (misal 100px dari atas)
                    if (rect.top <= 100 && rect.bottom > 100) {
                        // Section "masuk utama" di area viewport
                        setHash(`#${id}`);
                        found = true;
                        break;
                    }
                }
            }
            // Jika di paling atas (misal user scroll ke atas sekali), pastikan hash update
            if (!found && navLinks.length > 0 && window.scrollY < 100) {
                setHash(navLinks[0].link);
            }
        };

        // Handler for hash change with manual navigation (browser controls)
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        window.addEventListener("hashchange", handleHashChange);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [dataNavigation?.navigation, navLinks]); // Rerun jika dataSidebar berubah

    // Handler untuk klik pada link, hanya update hash secara manual & scroll smooth
    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, itemLink: string) => {
        e.preventDefault();
        const el = document.getElementById(itemLink.substring(1));
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
            window.history.pushState(null, "", itemLink); // Ubah URL tanpa reload
            setHash(itemLink); // Pastikan state juga update
        }
    };
    return (
        <div className={`${poppins.className} flex gap-4`}>
            {dataNavigation?.navigation?.map((item,index) => {
                const activeLink = (item.link === hash);

                return(
                    item.navigation && item.navigation.length ?
                        <div className={"group cursor-pointer"}
                        key={index}>
                            <div
                                className={`
                                ${activeLink ? "text-primary rounded-md hover:text-primary":"hover:text-primary"} 
                                ${activeLink
                                    ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                                    : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                                }
                                relative inline-flex justify-between font-semibold text-base px-3 py-1 
                                lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-primary lg:after:transition-transform lg:after:duration-400 lg:after:transform
                            `}
                            >
                                {item.name}
                            </div>
                            <div className={"absolute group-hover:flex bg-white pt-4 text-quaternary top-full right-0 text-nowrap w-full scale-y-0  group-hover:scale-y-100 transition-all duration-400 origin-top opacity-0 group-hover:opacity-100 rounded-b-sm"}>
                                <div className={"w-full h-full px-8 py-4 border-1 border-slate-200 rounded-b-md shadow-sm shadow-slate-200"}>
                                    <div className={"w-full overflow-y-scroll max-h-96"}>
                                        <HorizontalNavigationContent dataNavigation={item.navigation}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <a
                            key={index}
                            href={item.link}
                            className={`
                                ${activeLink ? "text-primary rounded-md hover:text-primary":"hover:text-primary"} 
                                ${activeLink
                                ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                                : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                            }
                                relative inline-flex items-center justify-between font-semibold text-base px-3 py-1 
                                lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-primary lg:after:transition-transform lg:after:duration-400 lg:after:transform
                            `}
                            onClick={item.link.startsWith('#')
                                ? (e) => handleHashClick(e, item.link)
                                : undefined}
                        >
                            {item.name}
                        </a>
                )})}
        </div>
    );
}