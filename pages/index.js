import Head from "next/head";
import Image from "next/image";
import GeoImageTop from "../components/GeoImageTop";
import GeoImageBottom from "../components/GeoImageBottom";
import styles from "../styles/Home.module.css";
// import AnimatedCursor from "react-animated-cursor";

export default function Home() {
    return (
        <div className="bg-primary h-screen w-screen flex justify-center font-relative">
            {/* <AnimatedCursor
                innerSize={30}
                outerSize={0}
                color="255,227,79"
                outerAlpha={0.2}
                innerScale={0.3}
                outerScale={5}
            /> */}
            <Head>
                <title>geos</title>
                <meta
                    name="description"
                    content="geos generative metaverse project"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="2xl:px-16 xl:px-12 lg:px-8 px-6 py-6">
                <div className="grid grid-cols-5 justify-center items-center">
                    <div className="items-center flex text-5xl">geos</div>
                    <div className="flex items-center w-64">
                        lorem ipsum dolor sit amet. connsectetur adipicsing
                        elit.
                    </div>
                    <div className="flex items-center w-56">
                        Generative Avatar Project. Coming Soon.
                    </div>
                    <div className="flex flex-row col-span-2">
                        <div>Project by</div>
                        <div className="px-2">
                            <div className="flex flex-row">
                                <div className="px-1">Shane Hanlon</div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Instagram
                                </div>
                                <div className="px-1 text-inactive"> / </div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Twitter
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-1">
                                    Rhea Lelina Manglapus
                                </div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Instagram
                                </div>
                                <div className="px-1 text-inactive"> / </div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Twitter
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-1">Christopher Rutledge</div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Instagram
                                </div>
                                <div className="px-1 text-inactive"> / </div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Twitter
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-1">Seb Helene</div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Instagram
                                </div>
                                <div className="px-1 text-inactive"> / </div>
                                <div className="px-1 text-inactive cursor-pointer hover:text-hoverSocial">
                                    Twitter
                                </div>
                            </div>
                        </div>
                    </div>
                    <GeoImageTop
                        pathBody="/images/Geo01_body.png"
                        pathHead="/images/Geo01_head.png"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo02_body.png"
                        pathHead="/images/Geo02_head.png"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo03_body.png"
                        pathHead="/images/Geo03_head.png"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo04_body.png"
                        pathHead="/images/Geo04_head.png"
                    />
                    <GeoImageTop
                        pathBody="/images/Geo05_body.png"
                        pathHead="/images/Geo05_head.png"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo06_body.png"
                        pathHead="/images/Geo06_head.png"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo07_body.png"
                        pathHead="/images/Geo07_head.png"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo08_body.png"
                        pathHead="/images/Geo08_head.png"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo09_body.png"
                        pathHead="/images/Geo09_head.png"
                    />
                    <GeoImageBottom
                        pathBody="/images/Geo10_body.png"
                        pathHead="/images/Geo10_head.png"
                    />
                    <div className="col-span-3"></div>
                    <div className="flex flex-row col-span-2">
                        <div className="px-6 hover:text-hover text-4xl cursor-pointer">
                            ->Twitter
                        </div>
                        <div className="px-6 hover:text-hover text-4xl cursor-pointer">
                            ->Discord
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
