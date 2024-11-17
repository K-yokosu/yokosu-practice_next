import { Inter } from "next/font/google";
import HeaderSidebar from "@/components/layout/header_sidebar";

export const metadata = {
    metadataBase: new URL("https://postgres-prisma.vercel.app"),
    title: "Vercel Postgres Demo with Prisma",
    description: "A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM"
};

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // const throwError = () => {
    //   throw new Error("This is a test error!");
    // };
    // throwError();
    return (
        <html lang="en">
            <body className={inter.variable}>
                <HeaderSidebar>{children}</HeaderSidebar>
            </body>
        </html>
    );
}
