import Image from "next/image";
import { useState } from "react";

const GeoImageTop = ({ pathHead, pathBody, color }) => {
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
            className="border  max-w-full h-auto border-secondary  mt-6 xl:mt-8 2xl:mt-12 select-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${head ? "" : "hidden"}`}>
                <Image
                    src={pathHead}
                    width="500"
                    height="500"
                    layout="responsive"
                    alt={pathHead}
                    priority={true}
                    className={`${color}`}
                />
            </div>
            <div className={`${head ? "hidden" : ""}`}>
                <Image
                    src={pathBody}
                    width="500"
                    height="500"
                    layout="responsive"
                    alt={pathBody}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default GeoImageTop;
