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
import Link from "next/link";

export default function info() {
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
    const [soonHover, setSoonHover] = useState(false);

    return (
        <div
            className="h-screen w-scree font-relative select-none"
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
            <div className="grid grid-cols-2 grid-rows-3 h-screen">
                <div className="ml-12 mt-12">
                    <Geos accent={accent} />
                </div>
                <div className="text-5xl flex items-start justify-end mr-12 mt-12">
                    <Link
                        style={
                            soonHover ? { color: accentColors[accent] } : null
                        }
                        onMouseOver={() => setSoonHover(true)}
                        onMouseLeave={() => setSoonHover(false)}
                        href="/info"
                        className="h-fit w-fit"
                    >
                        ->coming soon.
                    </Link>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Blurb />
                    <div className="py-4"></div>
                    <Desc />
                </div>
                <div className="flex justify-start items-center">
                    <Credits accent={accent} />
                </div>

                <div
                    style={
                        twitterHover ? { color: accentColors[accent] } : null
                    }
                    className={` text-5xl flex justify-start items-end mb-12 ml-12`}
                    onMouseOver={() => setTwitterHover(true)}
                    onMouseLeave={() => setTwitterHover(false)}
                >
                    <a
                        href="https://twitter.com/GeosNFT"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        ->twitter
                    </a>
                </div>
                <div
                    className={` flex justify-end items-end text-5xl mb-12 mr-12`}
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
    );
}
