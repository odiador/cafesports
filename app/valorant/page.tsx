import Image from "next/image";
import Embeds from "../../components/Embeds";

export default function Valorant() {
    return (
        <div className="flex-1 pt-20 flex flex-col items-center gap-8">
            <Image 
                className="h-fit" 
                src={"/valorant.webp"} 
                alt={"Poster de Valorant"} 
                width={400} 
                height={100}
            />
            
            {/* embed de amaqk */}
            <div className="w-full max-w-3xl px-4">
                <Embeds/>
            </div>
        </div>
    );
}