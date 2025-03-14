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
            if (window.FB)
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

    return <div className="overflow-hidden w-full flex justify-center rounded-xl"
    >
        <div className="fb-post rounded-xl w-fit overflow-x-hidden"
            data-show-text="false"
            data-href={url} data-width="300px" />
    </div>
}
