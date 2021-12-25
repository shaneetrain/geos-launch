import React from "react";
import Head from "next/head";
import GeoImageTop from "../components/GeoImageTop";
import GeoImageBottom from "../components/GeoImageBottom";
import { useState } from "react";
import Cursor from "../components/Cursor";
import { accentColors } from "../utils/accentColors";
import Geos from "../components/Geos";
import Link from "next/link";
import { geosData } from "../utils/geosDatabase";

const DesktopHome = ({ isMobile }) => {
    const [accent, setAccent] = useState(0);

    const handleClick = () => {
        if (accent >= accentColors.length - 1) {
            setAccent(0);
        } else {
            setAccent((prev) => prev + 1);
        }
    };

    const [discordHover, setDiscordHover] = useState(false);
    const [twitterHover, setTwitterHover] = useState(false);
    const [soonHover, setSoonHover] = useState(false);

    return (
        <div
            className=" h-screen w-screen flex justify-center items-center font-relative select-none"
            onClick={handleClick}
        >
            <Head>
                <title>geos</title>
                <meta
                    name="description"
                    content="geos - A generative metaverse project"
                />
                <link rel="icon" href="/geos.png" />
            </Head>
            <Cursor color={accent} />
            <div className="2xl:px-16 xl:px-12 lg:px-8 px-6 py-6 h-screen w-screen flex justify-center items-center">
                <div className="h-fit w-screen">
                    <div className="grid grid-cols-4 auto-cols-max justify-center items-center">
                        <Geos accent={accent} />
                        <div className="text-5xl col-span-3 flex items-center justify-end">
                            <div
                                className="w-fit h-fit"
                                onMouseOver={() => setSoonHover(true)}
                                onMouseLeave={() => setSoonHover(false)}
                                style={
                                    soonHover
                                        ? { color: accentColors[accent] }
                                        : null
                                }
                            >
                                <Link href="/info">->coming soon.</Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 justify-center items-center">
                        <GeoImageTop
                            pathBody={geosData[0].pathBody}
                            pathHead={geosData[0].pathHead}
                            color={geosData[0].color}
                            isMobile={isMobile}
                        />
                        <GeoImageTop
                            pathBody={geosData[1].pathBody}
                            pathHead={geosData[1].pathHead}
                            color={geosData[1].color}
                            isMobile={isMobile}
                        />
                        <GeoImageTop
                            pathBody={geosData[2].pathBody}
                            pathHead={geosData[2].pathHead}
                            color={geosData[2].color}
                            isMobile={isMobile}
                        />
                        <GeoImageTop
                            pathBody={geosData[3].pathBody}
                            pathHead={geosData[3].pathHead}
                            color={geosData[3].color}
                            isMobile={isMobile}
                        />
                        <GeoImageTop
                            pathBody={geosData[4].pathBody}
                            pathHead={geosData[4].pathHead}
                            color={geosData[4].color}
                            isMobile={isMobile}
                        />
                        <GeoImageBottom
                            pathBody={geosData[5].pathBody}
                            pathHead={geosData[5].pathHead}
                            color={geosData[5].color}
                            isMobile={isMobile}
                        />
                        <GeoImageBottom
                            pathBody={geosData[6].pathBody}
                            pathHead={geosData[6].pathHead}
                            color={geosData[6].color}
                            isMobile={isMobile}
                        />
                        <GeoImageBottom
                            pathBody={geosData[7].pathBody}
                            pathHead={geosData[7].pathHead}
                            color={geosData[7].color}
                            isMobile={isMobile}
                        />
                        <GeoImageBottom
                            pathBody={geosData[8].pathBody}
                            pathHead={geosData[8].pathHead}
                            color={geosData[8].color}
                            isMobile={isMobile}
                        />
                        <GeoImageBottom
                            pathBody={geosData[9].pathBody}
                            pathHead={geosData[9].pathHead}
                            color={geosData[9].color}
                            isMobile={isMobile}
                        />

                        <div className="col-span-3"></div>
                    </div>
                    <div className="grid grid-cols-6 justify-evenly">
                        <div
                            className={` text-5xl flex col-span-3 justify-start items-end`}
                        >
                            <a
                                href="https://twitter.com/GeosNFT"
                                target="_blank"
                                rel="noreferrer noopener"
                                onMouseOver={() => setTwitterHover(true)}
                                onMouseLeave={() => setTwitterHover(false)}
                                style={
                                    twitterHover
                                        ? { color: accentColors[accent] }
                                        : null
                                }
                            >
                                ->twitter
                            </a>
                        </div>
                        <div
                            className={` flex justify-end items-end text-5xl col-span-3`}
                        >
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                onMouseOver={() => setDiscordHover(true)}
                                onMouseLeave={() => setDiscordHover(false)}
                                style={
                                    discordHover
                                        ? { color: accentColors[accent] }
                                        : null
                                }
                            >
                                ->discord
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopHome;
