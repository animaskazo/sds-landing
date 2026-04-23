import SectionTitle from "@/components/section-title";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";

export default function Portfolio() {
    const projects = [
        {
            title: "Plataforma ReclutAI",
            client: "Cliente: BDO Chile",
            description: "ReclutAI es una aplicación web diseñada y desarrollada end-to-end, abarcando desde la definición del producto y la experiencia de usuario hasta el desarrollo. La plataforma fue creada para centralizar el proceso de recopilación y gestión de currículums.",
            image: "/assets/recluati.png",
            link: "https://www.behance.net/gallery/243108003/ReclutAI-BDO"
        },
        {
            title: "Sitio Web Hapykuere",
            client: "Cliente: Hapykuere",
            description: "Diseñamos y construimos un sitio web para la empresa Hapykuere. La interfaz es muy dinamica y lúdica. Ellos se dedican asesorar los procesos de Experiencia de Usuario a grandes compañias.",
            image: "/assets/hapy.png",
            link: "https://www.behance.net/gallery/241255213/hapykuerecom-Diseno-Responsive"
        },
        {
            title: "Plataforma TrustCheck",
            client: "Cliente: BDO Chile",
            description: "El objetivo principal de TrustCheck es generar un informe completo de evaluación comercial, combinando distintos criterios de análisis como antecedentes generales, riesgos, cumplimiento y desempeño. La aplicación procesa y estructura estos datos en reportes claros y accionables, facilitando la toma de decisiones estratégicas y estandarizando el proceso de evaluación de proveedores.",
            image: "/assets/check.png",
            link: "https://www.behance.net/gallery/243104643/TrustCheck-BDO"
        }
    ];

    return (
        <section className="mt-32 px-4" id="proyectos">
            <SectionTitle
                title="Proyectos Destacados"
                description="Conoce algunos de los productos digitales que hemos diseñado y construido para nuestros clientes."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass rounded-2xl overflow-hidden flex flex-col h-full"
                    >
                        <div className="relative h-56 w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-[#fff]">
                                    {project.client}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-100 text-sm/6 line-clamp-6 mb-8">
                                {project.description}
                            </p>
                            <div className="mt-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-white transition-colors font-medium border-b border-white/20 pb-1"
                                >
                                    Ver proyecto
                                    <ExternalLinkIcon className="size-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
