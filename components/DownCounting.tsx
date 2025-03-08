"use client";
import { endOfVoting } from "@/utils/consts"
import Countdown from "react-countdown"
import { renderer } from "./countdownRenderer"

const downCounting = () => {
    return (
        <div className="text-teal-200 text-3xl flex flex-col items-center justify-center pb-2 gap-2">
            Puedes votar hasta:
            <Countdown date={endOfVoting} renderer={renderer} />
        </div>
    )
}
export default downCounting;