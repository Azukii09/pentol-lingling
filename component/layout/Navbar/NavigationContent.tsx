"use client";
import {NavigationDataProps} from "@/lib/data/navigation/navigationData";
import SubNavigation from "@/app/_component/layout/Navbar/SubNavigation";
import {useEffect, useState} from "react";

export default function NavigationContent({
    dataSidebar,
}:{
    dataSidebar?: NavigationDataProps[];
}) {
    const hasChildren = dataSidebar && dataSidebar.length;
    const [hash, setHash] = useState<string>("#hero");
    const navLinks = (dataSidebar ?? []).filter(item => item.link.startsWith('#'));

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
    }, [dataSidebar]); // Rerun jika dataSidebar berubah

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
        <>
            {dataSidebar?.map((item, index) => {
                const activeLink = (item.link === hash);
                return (
                    item.navigation && item.navigation.length ?
                        <SubNavigation
                            key={index}
                            dataSidebar={item.navigation}
                            buttonName={item.name}
                            hasChildren={hasChildren}
                            parentIcon={item.icon}
                            parentLink={item.link}
                        />
                        :
                        <div
                            key={index}
                            className={`flex flex-col group cursor-pointer`}
                        >
                            <a
                                href={item.link}
                                className={`
                                    ${activeLink && "text-title bg-light-background rounded-md lg:bg-dark-background lg:text-wording "} 
                                    ${activeLink
                                        ? " lg:after:scale-x-100 lg:hover:after:scale-x-0"
                                        : " lg:after:scale-x-0 lg:hover:after:scale-x-100"
                                    }
                                    relative inline-flex items-center justify-between font-bold hover:text-title hover:bg-light-background lg:hover:bg-dark-background hover:rounded-md px-3 py-1 
                                    lg:after:origin-left lg:px-0 lg:mx-3 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-borderline lg:after:transition-transform lg:after:duration-400 lg:after:transform
                                `}
                                onClick={item.link.startsWith('#')
                                    ? (e) => handleHashClick(e, item.link)
                                    : undefined}
                            >
                                <div className={`flex gap-4 items-center group-hover:text-title lg:group-hover:text-wording`}>
                                    <span className={"block lg:hidden"}>
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                </div>
                            </a>
                        </div>
                )
            })}
        </>
    );
}