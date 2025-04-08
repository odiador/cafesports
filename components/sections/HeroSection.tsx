import Image from "next/image";
import LiveHero from "../LiveHero";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="flex w-full relative mb-4">
            <Image
                src={"/hero.webp"}
                alt={"Hero Image"}
                width={1366}
                height={768}
                priority
                className="w-full pointer-events-none select-none object-cover object-center h-[80vh]"
            />
            <div className="absolute z-10 md:top-48 top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4">
                <Link href={"/"}>
                    <Image src={"/logot.png"} alt={"Logo"} width={408} height={408} className="pointer-events-none animate-[breath_5s_cubic-bezier(0.4,0,0.6,1)_infinite] duration-1000 h-40 w-fit" />
                </Link>
                <LiveHero />
            </div>
            <div className="absolute -bottom-36 left-0 w-full h-72 bg-gradient-to-b from-black/0 via-[#1d2228] to-transparent pointer-events-none" />
        </div>
    );
}
