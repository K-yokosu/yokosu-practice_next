export async function getHello() {
    const res = await fetch(`${process.env.URL}/api/hello`, {
        method: "GET"
        // cache: "no-store"
        // next: {revalidate: 30}
    });
    const data = await res.json();
    return data.hello;
}
