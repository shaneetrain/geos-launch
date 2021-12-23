import Link from "next/link";
import React, { useState } from "react";
import Credits from "./Credits";
import Cursor from "./Cursor";
import GeoImageMobile from "./GeoImageMobile";
import Geos from "./Geos";
import { accentColors } from "../utils/accentColors";
import Desc from "./Desc";
import Blurb from "./Blurb";
import CreditsMobile from "./CreditsMobile";

const MobileHome = () => {
    const [accent, setAccent] = useState(0);
    const [details, setDetails] = useState(true);
    const [image, setImage] = useState(true);

    const handleClickMobile = () => {
        setDetails(!details);
        setImage(!image);
        if (accent >= 19) {
            setAccent(0);
        } else {
            setAccent((prev) => prev + 1);
        }
    };

    return (
        <div onClick={handleClickMobile}>
            <Cursor color={accent} />
            <div className="h-screen w-screen row-auto grid grid-rows-7">
                <div className="row-span-6 h-full w-full">
                    <div className="h-full w-full grid grid-cols-2 grid-rows-3">
                        <div className="flex flex-row items-start justify-start pl-6 pt-6">
                            <div className="items-center flex text-3xl">ge</div>
                            <div
                                style={{ color: `${accentColors[accent]}` }}
                                className={`items-center flex text-3xl`}
                            >
                                o
                            </div>
                            <div className="items-center flex text-3xl">s</div>
                        </div>

                        <div className="text-3xl flex flex-col items-end justify-start pr-6 pt-6">
                            <div>coming</div>
                            <div>soon.</div>
                        </div>
                        <div className="mt-3 col-span-2 flex flex-col justify-center items-center">
                            {details ? (
                                <div className="my-2">
                                    <div className="text-sm">
                                        lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="text-sm pb-6">
                                        connsectetur aldishoisn elit
                                    </div>
                                    <div className="text-sm">
                                        A Generative Avatar Project.
                                    </div>
                                </div>
                            ) : (
                                <CreditsMobile accent={accent} />
                            )}
                        </div>
                        <div className="text-3xl flex items-end justify-start pl-6">
                            ->twitter
                        </div>
                        <div className="text-3xl flex items-end justify-end pr-6">
                            ->discord
                        </div>
                    </div>
                </div>
                <div className=" flex items-end justify-end">
                    <div className="h-fit w-fit">
                        <GeoImageMobile
                            pathBody="/images/Geo02_body.png"
                            pathHead="/images/Geo02_head.png"
                            color="bg-accent3"
                            image={image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHome;