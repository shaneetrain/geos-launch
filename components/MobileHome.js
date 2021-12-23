import Link from "next/link";
import React, { useState } from "react";
import Credits from "./Credits";
import Cursor from "./Cursor";
import GeoImageMobile from "./GeoImageMobile";
import Geos from "./Geos";
import { accentColors } from "../utils/accentColors";
import Desc from "./Desc";
import Blurb from "./Blurb";

const MobileHome = () => {
    const [accent, setAccent] = useState(0);
    const handleClick = () => {
        if (accent >= 19) {
            setAccent(0);
        } else {
            setAccent((prev) => prev + 1);
        }
    };

    return (
        <div onClick={handleClick}>
            <Cursor color={accent} />
            <div className="h-screen w-screen row-auto grid grid-rows-7">
                <div className="row-span-4 h-full w-full">
                    <div className="h-full w-full grid grid-cols-2 grid-rows-3">
                        <div className="flex flex-row items-start justify-start">
                            <div className="items-center flex text-3xl">ge</div>
                            <div
                                style={{ color: `${accentColors[accent]}` }}
                                className={`items-center flex text-3xl`}
                            >
                                o
                            </div>
                            <div className="items-center flex text-3xl">s</div>
                        </div>

                        <div className="text-3xl flex flex-col items-end justify-start">
                            <div>coming</div>
                            <div>soon.</div>
                        </div>
                        <div className="col-span-2 flex flex-col justify-center items-center">
                            <Blurb />
                            <Desc />
                        </div>
                        <div className="text-3xl flex items-end justify-start">
                            ->twitter
                        </div>
                        <div className="text-3xl flex items-end justify-end">
                            ->discord
                        </div>
                    </div>
                </div>
                <div className="row-span-3 flex items-end justify-end bg-accent2">
                    <div className="h-fit w-fit">
                        <GeoImageMobile
                            pathBody="/images/Geo02_body.png"
                            pathHead="/images/Geo02_head.png"
                            color="bg-accent3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHome;
