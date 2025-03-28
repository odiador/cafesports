import Image from "next/image";

export default function Valorant() {
    return (

        <div className="flex-1 flex flex-col items-center">
            <Image className="h-fit" src={"/valorant.webp"} alt={"Poster de Valorant"} width={400} height={100}/>
        </div>
    );
}