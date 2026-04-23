import { PlayCircleIcon } from "lucide-react";

export default function HeroSection() {

    return (
        <>
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>
            <section className="flex flex-col items-center">
                <div className="flex items-center gap-3 mt-32">
                    <p>Pensamos, diseñamos y construimos tu idea</p>
                </div>
                <h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl">
                    Diseñamos y desarrollamos productos que funcionan y escalan
                </h1>
                <p className="text-center text-gray-100 text-base/7 max-w-md mt-6">
                    Somos el partner ideal para construir el producto que tu empresa necesita
                </p>

                <div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6">
                    <a href="mailto:hola@digital-solutions.work" className="btn glass py-3">
                        Tengamos una reunión
                    </a>
                </div>
            </section>
        </>
    );
}