import Image from "next/image";
import { useState } from "react";

const GeoImageBottom = ({ pathHead, pathBody, color }) => {
    const [head, setHead] = useState(false);
    const handleMouseEnter = () => {
        setHead(true);
    };

    const handleMouseLeave = () => {
        setHead(false);
    };

    return (
        <div
            className="border border-secondary mb-6 xl:mb-8 2xl:mb-12 select-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${head ? "" : "hidden"}`}>
                <Image
                    src={pathHead}
                    width="1000"
                    height="1000"
                    layout="responsive"
                    alt={pathHead}
                    priority={true}
                    className={`${color}`}
                />
            </div>
            <div className={`${head ? "hidden" : ""}`}>
                <Image
                    src={pathBody}
                    width="1000"
                    height="1000"
                    layout="responsive"
                    alt={pathBody}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default GeoImageBottom;
