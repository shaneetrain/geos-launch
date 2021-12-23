import Image from "next/image";
import { useState } from "react";

const GeoImageBottom = ({ pathHead, pathBody, color, isMobile }) => {
    const [head, setHead] = useState(false);
    const handleMouseEnter = () => {
        setHead(true);
    };

    const handleMouseLeave = () => {
        setHead(false);
    };

    return (
        <div
            className="row-span-3 border border-inactive mb-6 select-none"
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

export default GeoImageBottom;
