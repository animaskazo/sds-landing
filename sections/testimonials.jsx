import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

    const ref = useRef([]);
    const data = [
        {
            review: 'Super Digital nos ayudo en la construcción de nuestro sitio web y quedo increible. El equipo es muy profesional y siempre estuvieron atentos a nuestras necesidades.',
            name: 'Richard Nelson',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        },
        {
            review: 'Construyeron toda la tecnología de nuesta empresa de ultima milla en un plazo muy acotado. Siempre muy pendientes de la exeriencia y la seguridad de la app',
            name: 'Frank Martinez',
            about: 'Founder',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        },
        {
            review: 'Diseñador y construyeron nuetro sitio web y una aplicación para la gestión de nuestro servicio técnico. Quedo increible y nos ha ayudado mucho a mejorar la experiencia de nuestros clientes.',
            name: 'Ethan Roberts',
            about: 'Founder & CEO',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        }
    ];
    return (
        <section className="mt-32 flex flex-col items-center" id="testimonios">
            <SectionTitle
                title="Lo que dicen nuestros clientes"
                description="Generamos lazos de confianza y entregamos resultados que impulsan el crecimiento de sus negocios"
            />
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <motion.div key={index} className='w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium">{item.about}</p>
                            <img className='size-10 rounded-full' src={item.image} alt={item.name} />
                        </div>
                        <p className='line-clamp-5'>“{item.review}”</p>
                        <p className='text-gray-300'>
                            - {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}