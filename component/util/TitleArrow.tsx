import React from 'react';
import Arrow from "@/component/util/Arrow";

interface Size {
    type: string,
    size: number[],
    text: string,
}

const sizeValue : Size[] = [
    {type: "sm", size: [30, 3],text:"text-xs"},
    {type: "md", size: [35, 3.5],text:"text-sm"},
    {type: "lg", size: [45, 4],text:"text-sm"},
    {type: "xl", size: [55, 4.5],text:"text-base"},
    {type: "2xl", size: [65, 5],text:"text-base"},
]

export default function TitleArrow({
    text,
    size = "sm",
    withArrow = false,
}:{
    text: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    withArrow?: boolean;
}) {
    const [arrowLength, arrowSize] = sizeValue.find((item) => item.type === size)!.size;

    const textSize = sizeValue.find((item) => item.type === size)!.text;
    return (
        <div className={"flex items-center h-10 justify-center"}>
            {withArrow && <Arrow arrowLength={arrowLength} arrowSize={arrowSize}/>}
            <h3 className={`${textSize} font-semibold text-slate-400 tracking-widest uppercase`}>{text}</h3>
            {withArrow && <Arrow arrowLength={arrowLength} arrowSize={arrowSize} right/>}
        </div>
    );
}

