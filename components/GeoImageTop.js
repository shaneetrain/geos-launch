import Image from "next/image";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const GeoImageTop = ({ pathHead, pathBody, color, isMobile }) => {
    const [head, setHead] = useState(false);
    const handleMouseEnter = () => {
        setHead(true);
    };

    const handleMouseLeave = () => {
        setHead(false);
    };

    const bgCol = `bg-${color}`;

    return (
        <div
            className="mt-6 row-span-3 max-w-full h-auto border border-inactive justify-center items-start select-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${head ? "" : "hidden"}`}>
                <Image
                    src={pathHead}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt={pathHead}
                    className={`${color}`}
                    priority={!isMobile}
                />
            </div>
            <div className={`${head ? "hidden" : ""}`}>
                <Image
                    src={pathBody}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt={pathBody}
                    priority={!isMobile}
                />
            </div>
        </div>
    );
};

export default GeoImageTop;
