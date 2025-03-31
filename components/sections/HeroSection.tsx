import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex w-full relative mb-4 -z-10">
            <Image
                src={"/hero.webp"}
                alt={"Hero Image"}
                width={1366}
                height={768}
                priority
                className="w-full object-cover object-center h-[40vh]"
            />
            <div className="absolute -bottom-36 left-0 w-full h-72 bg-gradient-to-b from-black/0 via-[#1d2228] to-transparent pointer-events-none" />
        </div>
    );
}
