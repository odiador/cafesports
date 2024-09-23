import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UQ E-Sports | Valorant",
    description: "UQ E-Sports",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>
}
