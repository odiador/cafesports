"use client";
import { useEffect } from "react";

declare global {
    interface Window {
        FB?: {
            init: (config: { xfbml: boolean; version: string }) => void;
            XFBML: { parse: () => void };
        };
        fbAsyncInit?: () => void;
        fbScriptLoaded?: boolean;
    }
}

const Redirect = () => {
    // const pathname = usePathname();

    useEffect(() => {
        // const url = window.location.href;
        // if (!url.startsWith("https://www.cafesports.club/")) {
        //     redirect(`https://www.cafesports.club${pathname}`, RedirectType.replace);
        //     return;
        // }

        if (window.FB) {
            window.FB.XFBML.parse();
            return;
        }

        window.fbAsyncInit = function () {
            if (window.FB) {
                window.FB.init({
                    xfbml: true,
                    version: "v18.0",
                });
                window.FB.XFBML.parse();
            }
        };

        // Cargar el SDK solo si aún no está en la página
        if (!window.fbScriptLoaded) {
            window.fbScriptLoaded = true; // Marcar que el SDK ya fue cargado

            window.fbAsyncInit = function () {
                window.FB?.init({
                    xfbml: true,
                    version: "v18.0",
                });
                window.FB?.XFBML.parse();
            };

            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/es_LA/sdk.js";
            script.async = true;
            script.onload = () => {
                if (window.FB) {
                    window.FB.XFBML.parse();
                }
            };
            document.body.appendChild(script);
        }
    }, []);

    return null;
};

export default Redirect;
