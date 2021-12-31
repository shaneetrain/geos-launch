import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import Cursor from "./Cursor";
import GeoImageMobile from "./GeoImageMobile";
import { accentColors } from "../utils/accentColors";
import CreditsMobile from "./CreditsMobile";
import SwiperTest from "./SwiperTest";

const MobileHome = () => {
    const [accent, setAccent] = useState(0);
    const [details, setDetails] = useState(true);
    const [image, setImage] = useState(true);
    const [discordClick, setDiscordClick] = useState(false);

    const handleClickMobile = () => {
        if (accent >= accentColors.length - 1) {
            setAccent(0);
        } else {
            setAccent((prev) => prev + 1);
        }
    };

    const handleSwitch = () => {
        setDetails(!details);
        setImage(!image);
    };

    const handleDiscordClick = () => {
        setDiscordClick(!discordClick);
    };

    return (
        <div onClick={handleClickMobile} className="font-relative bg-primary">
            <Head>
                <title>geos</title>
                <meta
                    name="description"
                    content="geos - A generative metaverse project"
                />
                <link rel="icon" href="/geos.png" />
            </Head>
            <Cursor color={accent} />
            <div className="h-screen w-screen row-auto grid grid-rows-7">
                <div className="row-span-6 h-full w-full">
                    <div className="h-full w-full grid grid-cols-2 grid-rows-3">
                        <div className="flex flex-row items-start justify-start pl-6 pt-4">
                            <div className="items-center flex text-3xl">ge</div>
                            <div
                                style={{ color: `${accentColors[accent]}` }}
                                className={`items-center flex text-3xl`}
                            >
                                o
                            </div>
                            <div className="items-center flex text-3xl">s</div>
                        </div>

                        <div className="text-3xl flex flex-col items-end justify-start pr-6 pt-4">
                            <div>dropping</div>
                            <div className="-mt-2 bg-transparent">soon</div>
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
                        <div className="text-3xl flex items-end justify-start pl-6 pb-4">
                            <a
                                className="h-fit w-fit"
                                href="https://twitter.com/GeosNFT"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                ->twitter
                            </a>
                        </div>
                        <div className="text-3xl flex items-end justify-end pr-6 pb-4">
                            {discordClick ? (
                                <a
                                    onClick={handleDiscordClick}
                                    className="h-fit w-fit text-sm"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    coming soon
                                </a>
                            ) : (
                                <a
                                    onClick={handleDiscordClick}
                                    className="h-fit w-fit"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    ->discord
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className=" flex items-end justify-end">
                    <div onClick={handleSwitch} className="h-fit w-fit">
                        <SwiperTest image={image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileHome;
