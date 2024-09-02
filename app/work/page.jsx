"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Front-end",
        title: "Drive Avenue",
        description: "Site vitrine d'un site de straming.",
        stack: [{ name: "html 5" }, { name: "css 3" }, { name: "Javascript" }],
        image: "/assets/Project01.png",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "Front-end",
        title: "Eylifiqu Gym",
        description: "Projet d'un réseau social fictif.",
        stack: [{ name: "html 5" }, { name: "css 3" }, { name: "Javascript" }],
        image: "/assets/Project02.png",
        live: "https://sobted.vercel.app/",
        github: ""
    },
    {
        num: "03",
        category: "UI/UX Design",
        title: "Les Enfants sont Rois",
        description: "Site professionnel d'une E-Boutique spécialisée dans les vêtements bio et écologiques pour bébé.",
        stack: [{ name: "html 5" }, { name: "css 3" }, { name: "Javascript" }],
        image: "/assets/Project03.png",
        live: "https://car-ils-sont-nos-rois.vercel.app/",
        github: ""
    },
    {
        num: "04",
        category: "Front-end",
        title: "Modern Familly",
        description: "Céation d'une maquette de la landing page d'un site de location automobile.",
        stack: [{ name: "html 5" }, { name: "css 3" }, { name: "Javascript" }],
        image: "/assets/Project04.png",
        live: "https://drive-avenue--self.vercel.app/",
        github: ""
    },
    {
        num: "05",
        category: "Front-end",
        title: "Modern Familly",
        description: "Conception d'un Site Internet pour Pizzeria.",
        stack: [{ name: "html 5" }, { name: "css 3" }, { name: "Javascript" }, { name: "React" }],
        image: "/assets/Project05.png",
        live: "https://drive-avenue--self.vercel.app/",
        github: ""
    },
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setSelectedProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4 }, duration: 0.4, ease: "easeIn" }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {selectedProject.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                                Projet {selectedProject.category}
                            </h2>
                            <p className="text-black/60">{selectedProject.description}</p>
                            <ul className="flex gap-4">
                                {selectedProject.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== selectedProject.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={selectedProject.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={selectedProject.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-black text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] relative">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[300px] md:h-[460px] relative group flex justify-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    layout="fill"
                                                    objectFit="cover" // Ajout de cette ligne pour que l'image couvre correctement son conteneur
                                                    className="object-cover"
                                                    alt={project.name}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns
                                containerStyles="absolute inset-y-0 flex items-center justify-between w-full z-20 pointer-events-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all pointer-events-auto"
                                iconsStyles="text-2xl"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Work;
