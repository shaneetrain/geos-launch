import React from "react";
import Geos from "../components/Geos";
import { useState } from "react";

const infoTest = () => {
    const [soonHover, setSoonHover] = useState(false);

    return (
        <div className="grid grid-cols-2 grid-rows-3 h-screen">
            <div className="bg-accent1">
                <Geos />
            </div>
            <div className="bg-accent6">
                <div className="text-5xl col-span-3 flex items-center justify-end">
                    <a
                        style={
                            soonHover ? { color: accentColors[accent] } : null
                        }
                        onMouseOver={() => setSoonHover(true)}
                        onMouseLeave={() => setSoonHover(false)}
                        href="/info"
                    >
                        ->coming soon.
                    </a>
                </div>
            </div>
            <div className="bg-accent5"></div>
            <div className="bg-accent4"></div>
            <div className="bg-accent3 text-5xl flex justify-start items-end">
                <div className="w-fit h-fit">->discord</div>
            </div>
            <div className="bg-accent2 justify-end items-end flex">
                <div className="w-fit h-fit text-5xl">->twitter</div>
            </div>
        </div>
    );
};

export default infoTest;
