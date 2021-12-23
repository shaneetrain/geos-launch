import Link from "next/link";
import React from "react";
import { accentColors } from "../utils/accentColors";

const Geos = ({ accent }) => {
    return (
        <Link href="/">
            <div className="h-fit w-fit">
                <div className="flex flex-row">
                    <div className="items-center flex text-5xl">ge</div>
                    <div
                        style={{ color: `${accentColors[accent]}` }}
                        className={`items-center flex text-5xl`}
                    >
                        o
                    </div>
                    <div className="items-center flex text-5xl">s</div>
                </div>
            </div>
        </Link>
    );
};

export default Geos;
