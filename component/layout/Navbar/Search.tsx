import React from 'react';
import {HiMagnifyingGlass} from "react-icons/hi2";

export default function Search() {
    return (
        <div className={"py-1"}>
            <div className="w-full flex flex-1 items-center justify-between border border-borderline text-wording p-2 rounded-full px-4">
                <input
                    type="text"
                    name="search"
                    placeholder={'search'}
                    className={"flex flex-1 px-2 border-none rounded-full focus:outline-none placeholder-wording capitalize"}
                />
                <HiMagnifyingGlass className={"size-5 text-wording"} />
            </div>
        </div>
    );
}

