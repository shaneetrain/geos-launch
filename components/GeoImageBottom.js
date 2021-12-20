import Image from "next/image";
import { useState } from "react";

const GeoImageBottom = ({ pathHead, pathBody }) => {
    const [path, setPath] = useState(pathBody);
    const handleMouseEnter = () => {
        setPath(pathHead);
    };

    const handleMouseLeave = () => {
        setPath(pathBody);
    };

    return (
        <div
            className="border border-secondary  mb-6 xl:mb-8 2xl:mb-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={path}
                width="500"
                height="500"
                // layout="responsive"
                alt={path}
            />
        </div>
    );
};

export default GeoImageBottom;
