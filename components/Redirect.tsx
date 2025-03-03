"use client";
import { redirect, RedirectType, usePathname } from "next/navigation";
import { useEffect } from "react"

const Redirect = () => {
    const pathname = usePathname();
    useEffect(() => {
        const url = window.location.href;
        if (!url.startsWith("https://www.cafesports.club/"))
            redirect(`https://www.cafesports.club${pathname}`, RedirectType.replace)
    })
    return <></>;
}
export default Redirect;