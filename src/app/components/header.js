'use client'

import React, { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* LOGO */}
                    <a href="#" className="flex items-center space-x-2">
                        {/* Pode trocar por <img src="/logo.svg" alt="Logo" /> */}
                        <span className="text-2xl font-bold text-indigo-600">MeuLogo</span>
                    </a>

                    {/* NAV LINKS - desktop */}
                    <nav className="hidden md:flex space-x-8">
                        {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* BOTÃO MOBILE */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MENU MOBILE */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="px-2 pt-2 pb-3 space-y-1">
                        {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
