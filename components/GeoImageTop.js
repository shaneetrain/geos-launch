import Image from "next/image";
import { useState } from "react";

const GeoImageTop = ({ pathHead, pathBody }) => {
    const [path, setPath] = useState(pathBody);
    const handleMouseEnter = () => {
        setPath(pathHead);
    };

    const handleMouseLeave = () => {
        setPath(pathBody);
    };

    return (
        <div
            className="border border-secondary  mt-6 xl:mt-8 2xl:mt-12"
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

export default GeoImageTop;
