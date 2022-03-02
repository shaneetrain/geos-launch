import React, { useState } from "react";
import { accentColors } from "../utils/accentColors";

const CreditsMobile = ({ accent }) => {
    const color = accentColors[accent];

    const hoverLinkStyle = {
        color: color,
    };

    return (
        <div className="flex flex-col justify-center items-center text-sm">
            <div>Project by</div>
            <div>
                <div className="flex flex-row justify-center">
                    <div className="px-1">Shane Hanlon</div>
                    <div
                        className="px-1"
                        style={hoverLinkStyle}
                        onMouseOver={() => setShaneInsta(true)}
                        onMouseLeave={() => setShaneInsta(false)}
                    >
                        <a
                            href="https://www.instagram.com/shanehanlon/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Instagram
                        </a>
                    </div>
                    <div className="px-1 text-inactive"> / </div>
                    <div
                        className="px-1"
                        style={hoverLinkStyle}
                        onMouseOver={() => setShaneTwitter(true)}
                        onMouseLeave={() => setShaneTwitter(false)}
                    >
                        <a
                            href="https://twitter.com/shanephanlon"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="px-1">Rhea Lelina Manglapus</div>
                    <div
                        className="px-1"
                        style={hoverLinkStyle}
                        onMouseOver={() => setRheaInsta(true)}
                        onMouseLeave={() => setRheaInsta(false)}
                    >
                        <a
                            href="https://www.instagram.com/rhea_lm/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Instagram
                        </a>
                    </div>
                    <div className="px-1 text-inactive"> / </div>
                    <div
                        className="px-1"
                        style={hoverLinkStyle}
                        onMouseOver={() => setRheaTwitter(true)}
                        onMouseLeave={() => setRheaTwitter(false)}
                    >
                        <a
                            href="https://twitter.com/Rhea_LM"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="px-1">Christopher Rutledge</div>
                    <div
                        className="px-1"
                        style={hoverLinkStyle}
                        onMouseOver={() => setChrisInsta(true)}
                        onMouseLeave={() => setChrisInsta(false)}
                    >
                        <a
                            href="https://www.instagram.com/tokymegz/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Instagram
                        </a>
                    </div>
                    <div className="px-1 text-inactive"> / </div>
                    <div
                        className="px-1"
                        style={hoverLinkStyle}
                        onMouseOver={() => setChrisTwitter(true)}
                        onMouseLeave={() => setChrisTwitter(false)}
                    >
                        <a
                            href="https://twitter.com/tokyomegaplex"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditsMobile;
