import Image from "next/image";
import './page.css';
import Highlighting from "@/components/Hightlight";

export default function Home() {
  return (
    <div className="h-screen flex md:flex-row flex-col-reverse md:p-0 w-full items-center gradient justify-center sm:gap-16">
      <div className="basis">
        <div className="w-fit h-fit flex flex-col items-center">
          <Image src={"/logot.png"} alt={"Logo"} width={408} height={408} className="size-40" />
          CafEsports
        </div>
      </div>
      <div className="basis right">
        PREPARANDO<br />ALGO<br />
        <span className="relative">
          <Highlighting />
          NUEVO
        </span>
      </div>

    </div>
  );
}
