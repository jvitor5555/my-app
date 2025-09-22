'use client'

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Spinner from "../util/spinner";
import { Autenticacao } from "../util/autenticacao";
import { showAlert } from "../util/notificacao";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [rememberUser, setRememberUser] = useState(false);
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const router = useRouter();
    const tokenExpirationDays = 7;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleRememberChange = (e) => {
        setRememberUser(e.target.checked);
    };

    useEffect(() => {
        const { email } = credentials;
        if (email && rememberUser) {
            localStorage.setItem("userEmail", email);
        } else {
            localStorage.removeItem("userEmail");
        }
    }, [rememberUser, credentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = localStorage.getItem("userEmail") || credentials.email;
        const password = credentials.password;

        setLoading(true);
        setTimeout(() => {
            const authenticated = Autenticacao(email, password);
            setLoading(false);

            if (authenticated === true) {
                try {
                    Cookies.set("token", "token_coletado", {
                        expires: tokenExpirationDays,
                        secure: true,
                        sameSite: "strict",
                    });
                    router.push("/home");
                } catch (error) {
                    showAlert({
                        title: "Erro",
                        text: "Erro ao prosseguir",
                        icon: "error", // ✅ ícone do SweetAlert2
                    });
                    console.error(error);
                }
            } else {
                showAlert({
                    title: "Login inválido",
                    text: "Verifique seu e-mail ou senha.",
                    icon: "error", // ✅ ícone do SweetAlert2
                });
            }
        }, 2000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            {loading && <Spinner />}

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white shadow-md rounded-2xl p-8 flex flex-col space-y-6"
            >
                <h1 className="text-2xl font-bold text-center text-indigo-600">Login</h1>

                <div className="flex flex-col space-y-4">
                    <input
                        name="email"
                        type="text"
                        placeholder="Usuário"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black placeholder-gray-400"
                        onChange={handleInputChange}
                        value={credentials.email}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black placeholder-gray-400"
                        onChange={handleInputChange}
                        value={credentials.password}
                    />
                </div>

                <label className="flex items-center space-x-2 text-gray-700">
                    <input
                        type="checkbox"
                        checked={rememberUser}
                        onChange={handleRememberChange}
                        className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span>Lembrar usuário</span>
                </label>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
