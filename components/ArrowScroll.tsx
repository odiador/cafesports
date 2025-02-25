"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const ArrowScroll = () => {
    return (
        <Link href={"#form"} scroll className="flex flex-col items-center text-[#8ae4e7]">
            <div className="font-bangers text-5xl w-full text-center flex flex-col">Llena la encuesta</div>
            <IoIosArrowDown className="animate-bounce text-5xl" />
        </Link>
    )
}
export default ArrowScroll;