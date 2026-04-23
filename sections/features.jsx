import SectionTitle from "@/components/section-title";
import { BotIcon, BrainIcon, ZapIcon } from "lucide-react";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: BotIcon,
            title: "Experiencia de usuario",
            description: "Diseñamos interfaces intuitivas y atractivas que se adaptan a tus necesidades.",
        },
        {
            icon: BrainIcon,
            title: "Desarrollo de software",
            description: "Construimos software escalable y mantenible, con las mejores prácticas de la industria.",
        },
        {
            icon: ZapIcon,
            title: "Construccion en tiempo record",
            description: "Entregamos productos de alta calidad en tiempo record, sin sacrificar la calidad.",
        }
    ];

    return (
        <section className="mt-32" id="servicios">
            <SectionTitle
                title="Nuestra especialidad"
                description="Construimos productos de la mas alta calidad técnica, con un diseño y experiencia de usuario excepcionales"
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full min-h-56 transition duration-300"
                    >
                        <feature.icon className="size-8.5" />
                        <h3 className="text-base font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-100 line-clamp-4pb-2">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
