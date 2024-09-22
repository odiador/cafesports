import Link from "next/link";

export default function Footer() {
    return <footer className="z-10 fixed bottom-0 left-0 w-full bg-black/100 backdrop-blur-sm text-center h-6 items-center flex">
      <Link href={"https://github.com/odiador"} className="w-full cursor-default select-none py-1 text-xs font-medium text-white text-opacity-15 group hover:text-opacity-100 transition-colors">Made with ❤️ by <strong className="font-medium text-[#f45865] text-opacity-15 group-hover:text-opacity-100 transition-colors">Amador</strong></Link>
    </footer>;
  }
