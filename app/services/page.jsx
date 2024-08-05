"use client";

import { Description } from "@radix-ui/react-dialog";
import { BsArrowDownRight } from "react-icons/bs";
import Link from 'next/link'; // Import du composant Link

const services = [
    {
        num: `01`,
        title: `Développement web`,
        description: `Je crée des sites web élégants et performants, adaptés à vos besoins spécifiques.`,
        href: "/contact" // Lien vers la page contact
    },
    {
        num: `02`,
        title: `UI/UX Design`,
        description: `Je mets en place des solutions de design centrées sur l'utilisateur, pour des interfaces qui engagent et retiennent vos visiteurs.`,
        href: "/contact"
    },
    {
        num: `03`,
        title: `Logo Design`,
        description: `Je crée des logos uniques et mémorables, parfaitement adaptés à l'identité de votre marque. Laissez-moi vous aider à faire une première impression marquante.`,
        href: "/contact"
    },
    {
        num: `04`,
        title: `SEO`,
        description: `Je développe et implémente des stratégies SEO efficaces pour maximiser votre trafic organique. Laissez-moi vous aider à capter l'attention de vos clients potentiels.`,
        href: "/contact"
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="text-black min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link href={service.href} passHref>
                                        <div className="w-[70px] h-[70px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 group-hover:cursor-pointer">
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </div>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                <p className="text-black/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
};

export default Services;
