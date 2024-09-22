import { IconBrandTwitch, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

export default function Header() {
    return <div className="flex sticky top-0 bg-black/30 backdrop-blur-sm w-full px-4 py-2 gap-1">
        <div className="grow">
        <Link href={"/"} className="font-bold hover:text-[#f45865] transition-colors">UQ E-Sports</Link>
        </div>
        <Link href={"#"}>
            <IconBrandTwitch className="text-white hover:text-[#f45865] hover:scale-110 transition-all" />
        </Link>
        <Link href={"https://www.instagram.com/uq.esports/"}>
            <IconBrandInstagram className="text-white hover:text-[#f45865] hover:scale-110 transition-all" />
        </Link>
    </div>;
}