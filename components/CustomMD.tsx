"use client";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import AnimatedStats from "./AnimatedStats";


export default function MDXLayout({ children }: { children: ReactNode }) {
    return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}

export const mdxComponents = {
    ul: ({ children }: { children: ReactNode }) => (
        <ul className="list-disc pl-6">{children}</ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
        <ol className="list-decimal pl-6">{children}</ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
        <li className="text-xl font-questrial leading-tight">{children}</li>
    ),
    a: ({ children, href }: { children: ReactNode, href: string }) => <Link className="" href={href || "#"} target={href?.startsWith("#") ? undefined : "_blank"}>{children}</Link>, // Customize H1
    img: ({ src, alt }: { src: string, alt: string }) => <Image src={src || ""} alt={alt || ""} width={512} height={512} className={alt?.startsWith("mini") ? "size-5" : "w-64 h-fit"} />,
    AnimatedStats: ({ value }: { value: number }) => (
        <AnimatedStats value={value} />
    ),
}
/**
 * import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export default function MDXLayout({ children }: { children: ReactNode }) {
    return (
        <div className="prose lg:prose-xl text-white">
            {children}
        </div>
    );
}
    */
