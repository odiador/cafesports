import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "In Remodeling | Valorant",
    description: "In remodeling",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>
}
