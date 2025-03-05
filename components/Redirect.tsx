"use client";
import { redirect, RedirectType, usePathname } from "next/navigation";
import { useEffect } from "react";

const Redirect = () => {
    const pathname = usePathname();

    useEffect(() => {
        const url = window.location.href;
        if (!url.startsWith("https://www.cafesports.club/"))
            redirect(`https://www.cafesports.club${pathname}`, RedirectType.replace)


        const win = window as typeof window & { FB?: any; fbAsyncInit?: any };

        if (win.FB) {
            win.FB.XFBML.parse();
            return;
        }

        win.fbAsyncInit = function () {
            win.FB.init({
                xfbml: true,
                version: "v18.0",
            });
        };

        if (!document.getElementById("facebook-jssdk")) {
            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/es_LA/sdk.js";
            script.async = true;
            script.onload = () => {
                if (win.FB) {
                    win.FB.XFBML.parse();
                }
            };
            document.body.appendChild(script);
        }
    }, [pathname]);

    return null;
};

export default Redirect;
