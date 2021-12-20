import Image from "next/image";
import { useState } from "react";

const GeoImageBottom = ({ pathHead, pathBody }) => {
    const [head, setHead] = useState(false);
    const handleMouseEnter = () => {
        setHead(true);
    };

    const handleMouseLeave = () => {
        setHead(false);
    };

    return (
        <div
            className="border border-secondary  mb-6 xl:mb-8 2xl:mb-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${head ? "" : "hidden"}`}>
                <Image
                    src={pathHead}
                    width="500"
                    height="500"
                    // layout="responsive"
                    alt={pathHead}
                    priority={true}
                />
            </div>
            <div className={`${head ? "hidden" : ""}`}>
                <Image
                    src={pathBody}
                    width="500"
                    height="500"
                    // layout="responsive"
                    alt={pathBody}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default GeoImageBottom;
