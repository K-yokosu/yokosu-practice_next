import { headers } from "next/headers";

export const getDomain = (): string => {
    const headersData = headers();
    const host = headersData.get("host");
    const protocol = (headersData.get("x-forwarded-proto") ?? host?.startsWith("localhost")) ? "http" : "https";
    const apiBase = `${protocol}://${host}`;
    return apiBase;
};
