'use client'

import React from 'react';
import MobileToggleNavigation from "@/component/layout/navigation/mobile/MobileToggleNavigation";
import Logo from "@/component/util/Logo";
import LanguageChanger from "@/component/util/LanguageChanger";
import DesktopNavigation from "@/component/layout/navigation/desktop/DesktopNavigation";

export default function Navigation() {
    return (
        <>
            {/*large*/}
            <div className="hidden md:flex">
                <nav className={"global-padding w-full flex text-lg justify-between items-center bg-tertiary text-white py-4"}>
                    <div className={"w-1/4"}>
                        <Logo/>
                    </div>
                    <div className={"w-3/4 flex justify-end gap-4"}>
                        <div className={"relative"}>
                            <DesktopNavigation/>
                        </div>
                        <LanguageChanger/>
                    </div>
                </nav>
            </div>

            {/*mobile*/}
            <div className="flex md:hidden">
                {/*navigation parent*/}
                <nav className={"global-padding w-full flex justify-between items-center py-2 bg-tertiary text-white relative"}>
                    {/*logo*/}
                    <Logo/>
                    <MobileToggleNavigation/>
                </nav>
            </div>
        </>
    );
}