import React, { useState } from "react";
import { accentColors } from "../utils/accentColors";

const Credits = ({ accent }) => {
    const color = accentColors[accent];

    const [shaneInsta, setShaneInsta] = useState(false);
    const [shaneTwitter, setShaneTwitter] = useState(false);
    const [rheaInsta, setRheaInsta] = useState(false);
    const [rheaTwitter, setRheaTwitter] = useState(false);
    const [chrisInsta, setChrisInsta] = useState(false);
    const [chrisTwitter, setChrisTwitter] = useState(false);
    const [sebInsta, setSebInsta] = useState(false);
    const [sebTwitter, setSebTwitter] = useState(false);

    const hoverLinkStyle = {
        color: color,
    };
    const inactiveLinkStyle = {
        color: "#BFBFBF",
    };

    return (
        <div className="flex flex-row justify-center text-lg">
            <div className="pr-3">Project by</div>
            <div className="px-3">
                <div className="flex flex-row">
                    <div className="px-1">Shane Hanlon</div>
                    <div
                        className="px-1"
                        style={shaneInsta ? hoverLinkStyle : inactiveLinkStyle}
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
                        style={
                            shaneTwitter ? hoverLinkStyle : inactiveLinkStyle
                        }
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
                <div className="flex flex-row">
                    <div className="px-1">Rhea Lelina Manglapus</div>
                    <div
                        className="px-1"
                        style={rheaInsta ? hoverLinkStyle : inactiveLinkStyle}
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
                        style={rheaTwitter ? hoverLinkStyle : inactiveLinkStyle}
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
                <div className="flex flex-row">
                    <div className="px-1">Christopher Rutledge</div>
                    <div
                        className="px-1"
                        style={chrisInsta ? hoverLinkStyle : inactiveLinkStyle}
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
                        style={
                            chrisTwitter ? hoverLinkStyle : inactiveLinkStyle
                        }
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

export default Credits;
