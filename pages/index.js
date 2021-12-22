import Head from "next/head";
import GeoImageTop from "../components/GeoImageTop";
import GeoImageBottom from "../components/GeoImageBottom";
import { useState } from "react";
import Credits from "../components/Credits";
import Cursor from "../components/Cursor";
import { accentColors } from "../utils/accentColors";
import Geos from "../components/Geos";
import Blurb from "../components/Blurb";
import Desc from "../components/Desc";

export default function Home() {
    const [accent, setAccent] = useState(0);

    const handleClick = () => {
        if (accent >= 19) {
            setAccent(0);
        } else {
            setAccent((prev) => prev + 1);
        }
    };

    const [discordHover, setDiscordHover] = useState(false);
    const [twitterHover, setTwitterHover] = useState(false);

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
            <div className="2xl:px-16 xl:px-12 lg:px-8 px-6 py-6 h-screen w-screen">
                <div className="grid grid-cols-4 auto-cols-max justify-center items-center">
                    <Geos accent={accent} />
                    <Blurb />
                    <Desc />
                    <div className="text-4xl flex items-center justify-end">
                        Coming Soon.
                    </div>
                </div>
                <div className="grid grid-cols-5 justify-center items-center">
                    <GeoImageTop
                        pathBody="/images/Geo01_body.png"
                        pathHead="/images/Geo01_head.png"
                        color="bg-accent1"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo02_body.png"
                        pathHead="/images/Geo02_head.png"
                        color="bg-accent3"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo03_body.png"
                        pathHead="/images/Geo03_head.png"
                        color="bg-accent2"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo04_body.png"
                        pathHead="/images/Geo04_head.png"
                        color="bg-accent4"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo05_body.png"
                        pathHead="/images/Geo05_head.png"
                        color="bg-accent5"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo06_body.png"
                        pathHead="/images/Geo06_head.png"
                        color="bg-accent9"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo07_body.png"
                        pathHead="/images/Geo07_head.png"
                        color="bg-accent14"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo08_body.png"
                        pathHead="/images/Geo08_head.png"
                        color="bg-accent15"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo09_body.png"
                        pathHead="/images/Geo09_head.png"
                        color="bg-accent8"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo10_body.png"
                        pathHead="/images/Geo10_head.png"
                        color="bg-accent12"
                    />
                    <div className="col-span-3"></div>
                </div>
                <div className="grid grid-cols-6 justify-between">
                    <div
                        style={
                            twitterHover
                                ? { color: accentColors[accent] }
                                : null
                        }
                        className={`px-6 text-4xl`}
                        onMouseOver={() => setTwitterHover(true)}
                        onMouseLeave={() => setTwitterHover(false)}
                    >
                        <a
                            href="https://twitter.com/GeosNFT"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            ->Twitter
                        </a>
                    </div>
                    <Credits accent={accent} />
                    <div
                        style={
                            discordHover
                                ? { color: accentColors[accent] }
                                : null
                        }
                        className={`px-6 text-4xl`}
                        onMouseOver={() => setDiscordHover(true)}
                        onMouseLeave={() => setDiscordHover(false)}
                    >
                        <a
                            href="https://discord.com"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            ->Discord
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
