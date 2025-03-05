"use client";
import { useEffect } from "react";

export default function FacebookEmbed({ url }: { url: string }) {
    useEffect(() => {
        const win = window as typeof window & { FB?: any; fbAsyncInit?: any };

        // Verifica si FB ya está cargado
        if (win.FB) {
            win.FB.XFBML.parse();
            return;
        }

        // Inicializa el SDK de Facebook
        win.fbAsyncInit = function () {
            win.FB.init({
                xfbml: true,
                version: "v18.0",
            });
        };

        // Carga el script del SDK si aún no está en la página
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
    }, []);

    return <div className="fb-post bg-white" data-href={url} data-width="500"></div>;
}
