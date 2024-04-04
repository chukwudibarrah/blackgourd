import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function ScrollToTopOnNavigation() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("Pathname changed:", pathname);
        window.scrollTo(0, 0);
      }, [pathname]);

    return null
}
