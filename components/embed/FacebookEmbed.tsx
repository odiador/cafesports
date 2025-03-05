"use client";
import { useEffect } from "react";

export default function FacebookEmbed({ url }: { url: string }) {
    useEffect(() => {
        // Verifica si FB ya está cargado
        if (window.FB) {
            window.FB.XFBML.parse();
            return;
        }

        // Inicializa el SDK de Facebook
        window.fbAsyncInit = function () {
            window.FB.init({
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
            document.body.appendChild(script);
        }
    }, []);

    return <div className="fb-post bg-white" data-href={url} data-width="500"></div>;
}
