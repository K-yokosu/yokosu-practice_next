"use client";

import React from "react";
import useLoadingStore from "@/stores/useLoadingStore";

const LoadingIndicator: React.FC = () => {
    const { isLoading } = useLoadingStore();

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        </div>
    );
};

export default LoadingIndicator;
