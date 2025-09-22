'use client'

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Conteúdo principal */}
            <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12 space-y-16">
                {/* Seção 1 */}
                <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                        Seção 1
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, tortor nec facilisis ultrices, sapien ligula fringilla
                        purus, at ultrices est lorem nec elit. Suspendisse potenti.
                    </p>
                </section>

                {/* Seção 2 */}
                <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                        Seção 2
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        facilisi. Integer sodales nisi at nisi egestas, ac malesuada orci
                        interdum. Vestibulum ante ipsum primis in faucibus orci luctus.
                    </p>
                </section>

                {/* Seção 3 */}
                <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                        Seção 3
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                        imperdiet metus in nulla posuere, vitae luctus nisl egestas.
                        Suspendisse sit amet urna eu risus dapibus fermentum.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
