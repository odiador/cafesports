"use client";
import { redirect, RedirectType, usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
    interface Window {
        FB?: {
            init: (config: { xfbml: boolean; version: string }) => void;
            XFBML: { parse: () => void };
        };
        fbAsyncInit?: () => void;
    }
}

const Redirect = () => {
    const pathname = usePathname();

    useEffect(() => {
        const url = window.location.href;
        if (!url.startsWith("https://www.cafesports.club/")) {
            redirect(`https://www.cafesports.club${pathname}`, RedirectType.replace);
        }

        if (window.FB) {
            window.FB.XFBML.parse();
            return;
        }

        // Inicializa el SDK de Facebook solo si FB está definido
        window.fbAsyncInit = function () {
            if (typeof window.FB !== "undefined") {
                window.FB.init({
                    xfbml: true,
                    version: "v18.0",
                });
            }
        };

        // Carga el script del SDK si aún no está en la página
        if (!document.getElementById("facebook-jssdk")) {
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

    return <></>;
};

export default Redirect;
