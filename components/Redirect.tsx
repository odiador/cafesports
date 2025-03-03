"use client";
import { redirect, RedirectType, usePathname } from "next/navigation";
import { useEffect } from "react"

const Redirect = () => {
    const pathname = usePathname();
    useEffect(() => {
        const url = window.location.href;
        if (!url.startsWith("https://cafesports.club/"))
            redirect(`https://cafesports.club${pathname}`, RedirectType.replace)
    })
    return <></>;
}
export default Redirect;