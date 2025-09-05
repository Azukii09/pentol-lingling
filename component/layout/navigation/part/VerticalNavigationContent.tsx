import React, {useEffect, useState} from 'react';
import SubVerticalNavigationContent from "@/component/layout/navigation/part/SubVerticalNavigationContent";
import {VerticalNavigationProps} from "@/lib/type/navigation";

export default function VerticalNavigationContent({
    dataNavigation,
}:{
    dataNavigation?: VerticalNavigationProps[];
}) {
    const hasChildren = dataNavigation && dataNavigation.length

    const [hash, setHash] = useState<string>("#hero");
    const navLinks = (dataNavigation ?? []).filter(item => item.link.startsWith('#'));

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
    }, [dataNavigation, navLinks]); // Rerun jika dataSidebar berubah

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
        <div className={"w-full flex flex-col pl-5 font-semibold"}>
            {dataNavigation?.map((item, index) =>{
                const activeLink = (item.link === hash);

                return (
                item.navigation && item.navigation.length ?
                    // nested navigation
                    <SubVerticalNavigationContent
                        key={index}
                        dataNavigation={item.navigation}
                        buttonName={item.name}
                        hasChildren={hasChildren}
                        parentIcon={item.icon}
                        link={item.link}
                    />
                    :
                    // without children
                    <div
                        key={index}
                        className={`${activeLink && "text-tertiary bg-primary/30 rounded-md"} hover:text-white hover:bg-primary/80 hover:rounded-md  px-3 py-1 w-full flex flex-col group cursor-pointer mb-4`}
                    >
                        <a
                            href={item.link}
                            className={"inline-flex items-center justify-between w-full font-bold"}
                            onClick={item.link.startsWith('#')
                                ? (e) => handleHashClick(e, item.link)
                                : undefined}
                        >
                            <div className={`flex gap-4 items-center group-hover:text-white`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </a>
                    </div>
            )})}
        </div>
    );
}