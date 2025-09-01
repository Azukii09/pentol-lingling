import React from 'react';
import Image from "next/image";

export default function Logo() {
    return (
        <div className={"size-12 relative"}>
            <Image
                src={"/img/logo.png"}
                alt={"logo"}
                priority
                className={"object-contain"}
                fill
            />
        </div>
    );
}