import Image from "next/image";
import { useState } from "react";

const GeoImageTop = ({ pathHead, pathBody }) => {
    const [head, setHead] = useState(false);
    const handleMouseEnter = () => {
        setHead(true);
    };

    const handleMouseLeave = () => {
        setHead(false);
    };

    return (
        <div
            className="border border-secondary  mt-6 xl:mt-8 2xl:mt-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {head ? (
                <Image
                    src={pathHead}
                    width="500"
                    height="500"
                    // layout="responsive"
                    alt={pathHead}
                    priority={true}
                />
            ) : (
                <Image
                    src={pathBody}
                    width="500"
                    height="500"
                    // layout="responsive"
                    alt={pathBody}
                />
            )}
        </div>
    );
};

export default GeoImageTop;
