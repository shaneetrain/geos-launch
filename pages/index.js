import Head from "next/head";
import GeoImageTop from "../components/GeoImageTop";
import GeoImageBottom from "../components/GeoImageBottom";
import { useState } from "react";
import Credits from "../components/Credits";
// import Cursor from "../components/Cursor";
import { accentColors } from "../utils/accentColors";

export default function Home() {
    const [accent, setAccent] = useState(0);

    const handleClick = () => {
        if (accent >= 19) {
            setAccent(0);
        } else {
            setAccent((prev) => prev + 1);
        }
    };

    return (
        <div
            className="bg-primary h-screen w-screen flex justify-center font-relative select-none"
            onClick={handleClick}
        >
            <Head>
                <title>geos</title>
                <meta
                    name="description"
                    content="geos generative metaverse project"
                />
                <link rel="icon" href="/geos.png" />
            </Head>
            {/* <Cursor color={accent} /> */}
            <div className="2xl:px-16 xl:px-12 lg:px-8 px-6 py-6">
                <div className="grid grid-cols-5 justify-center items-center">
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
                    <div className="flex items-center w-64">
                        lorem ipsum dolor sit amet. connsectetur adipicsing
                        elit.
                    </div>
                    <div className="flex items-center w-56">
                        Generative Avatar Project. Coming Soon.
                    </div>
                    <div className="flex flex-row col-span-2">
                        <Credits />
                    </div>
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
                    <div className="flex flex-row col-span-2 justify-end">
                        <div className="px-6 hover:text-hover text-4xl cursor-pointer">
                            <a href="https://twitter.com/GeosNFT">->Twitter</a>
                        </div>
                        <div
                            className={`hover:text-hover px-6 text-4xl cursor-pointer`}
                        >
                            <a href="https://discord.com">->Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
