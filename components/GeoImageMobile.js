import Image from "next/image";
import { useState } from "react";

const GeoImageMobile = ({ pathHead, pathBody, color }) => {
    const [head, setHead] = useState(true);
    const handleMouseEnter = () => {
        setHead(false);
    };

    const handleMouseLeave = () => {
        setHead(true);
    };

    const bgCol = `bg-${color}`;

    return (
        <div
            className="select-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${head ? "" : "hidden"} w-screen`}>
                <Image
                    src={pathHead}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt={pathHead}
                    priority={true}
                    className={`${color}`}
                />
            </div>
            <div className={`${head ? "hidden" : ""} w-screen`}>
                <Image
                    src={pathBody}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt={pathBody}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default GeoImageMobile;
