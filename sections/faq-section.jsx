import SectionTitle from '@/components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: '¿Necesito ser una empresa hacer un proyecto con Uds?',
            answer: "No, puedes ser una persona natural, lo importante es que tengas una idea clara de lo que quieres lograr.",
        },
        {
            question: '¿Cuánto tiempo dura un proyecto?',
            answer: 'Depende de la complejidad del proyecto, pero generalmente toma 4 semanas una aplicación web pequeña.',
        },
        {
            question: '¿Qué tecnologías utilizan?',
            answer: 'Utilizamos las tecnologías más modernas y escalables del mercado, como React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, entre otras.',
        },
        {
            question: '¿Qué tipo de soporte ofrecen después de la entrega?',
            answer: 'Ofrecemos soporte técnico continuo, mantenimiento, actualizaciones y mejoras según las necesidades de tu proyecto.',
        }
    ];

    return (
        <section className='mt-32'>
            <SectionTitle title="FAQ's" description="Resuelve las principales dudas que podrias tener" />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col glass rounded-md'>
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}