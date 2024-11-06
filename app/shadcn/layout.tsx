import { ShadcnTitle } from "@/components/layout/shadcn_title";

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ShadcnTitle />
            {children}
        </>
    );
}
