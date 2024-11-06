"use client";

import React from "react";

export default function GlobalError({ error }: { error: Error }) {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <p>Please try again later.</p>
        </div>
    );
}
