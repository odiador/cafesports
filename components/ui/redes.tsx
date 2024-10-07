import { IconBrandTwitch, IconBrandInstagram, IconBrandKick } from "@tabler/icons-react";
import Link from "next/link";

export default function Redes() {
    return <div className="flex mt-4 gap-2 justify-between flex-col sm:flex-row items-center w-full">
        <Link className="flex gap-1 items-center px-4 bg-black/50 py-1 group hover:scale-110 transition-all rounded-lg w-fit" href={"https://www.twitch.tv/cafesportsq"}>
            <IconBrandTwitch className="text-[#9146ff] size-10 transition-all" />
            <h1 className="text-[#9146ff] font-semibold">{"/cafesportsq"}</h1>
        </Link>
        <Link className="flex gap-1 items-center px-4 bg-black/50 py-1 group hover:scale-110 transition-all rounded-lg w-fit" href={"https://www.instagram.com/cafesportq/"}>
            <IconBrandInstagram className="text-white size-10 transition-all" />
            <h1 className="font-semibold">{"/cafesportq"}</h1>
        </Link>
        <Link className="flex gap-1 items-center px-4 bg-black/50 py-1 group hover:scale-110 transition-all rounded-lg w-fit" href={"https://kick.com/cafesports"}>
            <IconBrandKick className="text-[#53fd18] size-10 transition-all" />
            <h1 className="text-[#53fd18] font-semibold">{"/cafesports"}</h1>
        </Link>
    </div>;
}
