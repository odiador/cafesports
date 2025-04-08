"use client";
import About from '@/utils/torneo.mdx';

export default function AboutSection() {
    return (
        <section id="about" className="w-full pt-20 px-2 h-screen flex flex-col items-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <About />
            </div>
        </section>
    )
}