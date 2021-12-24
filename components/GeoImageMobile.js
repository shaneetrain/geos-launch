import Image from "next/image";
import { useState } from "react";

const GeoImageMobile = ({ pathHead, pathBody, color, image }) => {
    const bgCol = `bg-${color}`;

    return (
        <div className="select-none">
            <div className={`${image ? "" : "hidden"} w-screen`}>
                <Image
                    src={pathHead}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt={pathHead}
                    className={`${color}`}
                />
            </div>
            <div className={`${image ? "hidden" : ""} w-screen`}>
                <Image
                    src={pathBody}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt={pathBody}
                    className={`${color}`}
                />
            </div>
        </div>
    );
};

export default GeoImageMobile;
