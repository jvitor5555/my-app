import React from "react";

export default function Spinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
            <div
                className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
                aria-label="Carregando"
            />
        </div>
    );
}
