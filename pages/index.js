import { useEffect, useRef } from "react";
import DesktopHome from "../components/DesktopHome";
import MobileHome from "../components/MobileHome";

export default function Home() {
    const isMobile = useRef(false);

    if (typeof window !== "undefined") {
        isMobile.current = window.matchMedia("(max-width: 600px)").matches;
    }

    if (isMobile.current) {
        return <MobileHome />;
    }

    return <DesktopHome />;
}
