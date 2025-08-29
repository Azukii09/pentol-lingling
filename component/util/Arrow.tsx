import React from 'react';

type ArrowProps = {
    arrowSize: number,
    arrowLength: number,
    right?: boolean,
}

export default function Arrow({
    arrowSize,
    arrowLength,
    right = false,

}: ArrowProps) {

    return (
        <div className={`flex items-center ${right ? "rotate-180" : ""}`}>
            {/* Kepala panah */}
            <div
                style={{
                    width: 0,
                    height: 0,
                    borderTop: `${arrowSize}px solid transparent`,
                    borderBottom: `${arrowSize}px solid transparent`,
                    borderRight: `${arrowSize * 1.5}px solid #5D81E2`,
                }}
            />
            {/* Badan panah: segitiga mengerucut horizontal */}
            <svg
                width={arrowLength}
                height={arrowSize}
                viewBox={`0 1 ${arrowLength} ${arrowSize}`}
                preserveAspectRatio="none"
                style={{ display: 'block' }}
            >
                <defs>
                    <linearGradient id="bodyGradient" x1="0" y1="0" x2={arrowLength} y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                </defs>
                {/* Segitiga mengerucut! */}
                <polygon
                    points={`0,2 ${arrowLength},${arrowSize/1.5} 0,${arrowSize}`}
                    fill="url(#bodyGradient)"
                />
            </svg>
        </div>

    );
}