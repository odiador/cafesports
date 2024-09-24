import { IconBrandTwitch, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return <div className="flex sticky z-50 top-0 bg-black/30 backdrop-blur-sm w-full items-center p-2 gap-1">
        <div className="grow">
            <Link href={"/"} className="font-bold hover:text-[#f45865] bg-opacity-15 hover:bg-opacity-5 text-white transition-colors flex items-center bg-white rounded-full py-1 w-fit px-3 gap-1">
                <Image className="rounded-full" src={"/logot.png"} alt="Logo" width={32} height={32} />
                UQ E-Sports</Link>
        </div>
        <Link href={"#"}>
            <IconBrandTwitch className="text-white hover:text-[#f45865] hover:scale-110 transition-all" />
        </Link>
        <Link href={"https://www.instagram.com/uq.esports/"}>
            <IconBrandInstagram className="text-white hover:text-[#f45865] hover:scale-110 transition-all" />
        </Link>
    </div>;
}