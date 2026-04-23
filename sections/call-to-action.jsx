import { ArrowRightIcon } from "lucide-react";

export default function CallToAction() {
    return (
        <div className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass">
            <h2 className="text-2xl md:text-4xl font-medium mt-2">
                ¿Tienes una idea en mente?
            </h2>
            <p className="mt-4 text-sm/7 max-w-md">
                Hablemos de tu idea y te asesoramos sin compromiso.
            </p>
            <a href="mailto:hola@digital-solutions.work" className="btn glass transition-none flex items-center justify-center gap-2 mt-8">
                Envíanos un mensaje
                <ArrowRightIcon className="size-4" />
            </a>
        </div>
    );
};