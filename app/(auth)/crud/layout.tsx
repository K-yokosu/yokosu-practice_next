import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
    title: "todo",
    description: "todo"
};

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="p-4">{children}</div>;
}
