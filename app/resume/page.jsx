"use client"

import { Description } from "@radix-ui/react-dialog";
import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJs,
} from "react-icons/fa"

import { SiTailwindcss, SiNodedotjs, SiNextdotjs, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si"

const about = {
    title: "À propos de moi",
    description: "",
    info: [
        {
            fieldName: "Nom:",
            fieldValue: "Lucas EVEC"
        },
        {
            fieldName: "Téléphone:",
            fieldValue: "06 02 31 66 20"
        },
        {
            fieldName: "Expérience:",
            fieldValue: "2 ans"
        },
        {
            fieldName: "Nationalité:",
            fieldValue: "Française"
        },
        {
            fieldName: "Freelance:",
            fieldValue: "Disponible"
        },
        {
            fieldName: "Email:",
            fieldValue: "lucasevecdev@gmail.com"
        },
        {
            fieldName: "langages:",
            fieldValue: "Français/Anglais"
        },
        {
            fieldName: "Localisation:",
            fieldValue: "Poitiers, FR"
        },
    ]
}

const experience = {
    icon: ``,
    title: "Mon expérience",
    description: "Voici un aperçu de mon parcours professionnel.",
    items: [
        {
            company: "EYLYFIQU GymClub.",
            position: "Développeur front-end",
            duration: "2024."
        },
        {
            company: "Odyssea NightClub.",
            position: "Développeur front-end",
            duration: "2024."
        },
        {
            company: "WhiteCats.",
            position: "Développeur front-end & SEO",
            duration: "2023"
        },
        {
            company: "DriveAvenue.",
            position: "Développeur front-end",
            duration: "2023"
        },
    ]
};


const education = {
    icon: ``,
    title: "Mes Formations",
    description: "Voici un aperçu de mon éducation, incluant les institutions où j'ai étudié, les diplômes que j'ai obtenus, et les domaines de spécialisation que j'ai choisis.",
    items: [
        {
            institution: "CREPS BPJEPS, Saint-Raphaël",
            degree: "Coach sportif",
            duration: "2021-2022"
        },
        {
            institution: "École de Police, Nimes",
            degree: "ADS",
            duration: "2021"
        },
        {
            institution: "STAPS, Nice",
            degree: "Licence 2",
            duration: "2018-2021"
        },
        {
            institution: "Lycee BRISTOL, Cannes",
            degree: "BAC-Economique & Social",
            duration: "2015-2018"
        },
    ]
};

const skills = {
    title: "Mes compétences",
    description: "Un aperçu des compétences clés en développement web front-end que j'ai acquises et perfectionnées, frameworks et outils essentiels pour la création de sites web modernes et réactifs..",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiAdobeillustrator />,
            name: "Illustrator",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Photoshop",
        },
    ],

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger, 
} from "@radix-ui/react-tooltip"; 

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger className="bg-[#f1d2ae] text-black" value="experience">Expérience</TabsTrigger>
                        <TabsTrigger className="bg-[#f1d2ae] text-black" value="education">Formations</TabsTrigger>
                        <TabsTrigger className="bg-[#f1d2ae] text-black" value="skills">Compétences</TabsTrigger>
                        <TabsTrigger className="bg-[#f1d2ae] text-black" value="about">À propos de moi</TabsTrigger>
                    </TabsList>

                    {/*Content*/}
                    <div className="min-h-[70vh] w-full">
                        {/*experience*/}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-black">{experience.title}</h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return (
                                                <li key={index} className="bg-[#f1d2ae] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-black text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/*education*/}
                        <TabsContent value="education" className="w-full">
                            <div className="text-black flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=> {
                                            return (
                                                <li key={index} className="bg-[#f1d2ae] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-black text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-black/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/*skills*/}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-black flex flex-col gap-[30px] text-center xl:text-left">
                                   <h3 className="text-4xl font-bold">{skills.title}</h3>
                                   <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                                     {skills.description}
                                   </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index)=> {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#f1d2ae] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-500">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="text-black capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/*about*/}
                        <TabsContent value="about" className="w-full text-centerxll:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-black text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=> {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-black/60">{item.fieldName}</span>
                                                <span className="text-black text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>)
};

export default Resume

