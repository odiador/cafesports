import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CafESports | Valorant",
    description: "Holi en valorant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>
}
