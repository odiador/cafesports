import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex w-full relative">
            {/* Imagen de fondo */}
            <Image
                src={"/hero.webp"}
                alt={"Hero Image"}
                width={1366}
                height={768}
                priority
                className="w-full object-cover object-center h-[50vh]"
            />

            <div className="absolute -bottom-36 left-0 w-full h-72 bg-gradient-to-b from-black/0 via-[#1d2228] to-transparent" />

            <div className="absolute top-24 left-1/2 -translate-x-1/2">
                <Image
                    src={"/logot.png"}
                    alt={"Logo"}
                    width={408}
                    height={408}
                    className="w-40"
                />
            </div>
        </div>
    );
}
