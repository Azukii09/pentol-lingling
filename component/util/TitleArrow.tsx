import React from 'react';
import Arrow from "@/app/component/util/Arrow";

interface Size {
    type: string,
    size: number[],
}

const sizeValue : Size[] = [
    {type: "sm", size: [30, 3]},
    {type: "md", size: [35, 3.5]},
    {type: "lg", size: [45, 4]},
    {type: "xl", size: [55, 4.5]},
    {type: "2xl", size: [65, 5]},
]

export default function TitleArrow({
    text,
    size = "sm",
}:{
    text: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
}) {
    const [arrowLength, arrowSize] = sizeValue.find((item) => item.type === size)!.size;
    return (
        <div className={"flex items-center h-10 justify-center"}>
            <Arrow arrowLength={arrowLength} arrowSize={arrowSize}/>
            <h3 className={`text-lg font-semibold text-primary tracking-widest uppercase`}>{text}</h3>
            <Arrow arrowLength={arrowLength} arrowSize={arrowSize} right/>
        </div>
    );
}

