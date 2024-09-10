"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Téléphone",
        description: "(+33) 6 02 31 66 20"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "lucasevecdev@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Adresse",
        description: "Poitiers, Fr"
    }
];

const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none"
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    }
  }
};

export const navVariants = {
  hidden: {
    clipPath: `circle(5.8% at 50% 0)`,
    opacity: 0,
    transition: {
      type: `spring`,
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: `circle(130% at 50% 0)`,
    transition: {
      type: `spring`,
      stiffness: 80,
    },
  },
};

const Contact = () => {
    const [isActive, setIsActive] = useState(false);
    const [nav, setNav] = useState(false);
    const [showCGV, setShowCGV] = useState(false);

    useEffect(() => {
        window.addEventListener(`scroll`, () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
        });
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#f1d2ae] rounded-xl">
                            <h3 className="text-4xl text-black">Let&apos;s Work together!</h3>
                            <p className="text-black/60">Contactez-moi ici pour convenir des ambitions de votre projet!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Prénom" />
                                <Input type="text" placeholder="Nom" />
                                <Input type="email" placeholder="Adresse e-mail" />
                                <Input type="tel" placeholder="Numéro de téléphone" />
                            </div>
                            <Select>
                                <SelectTrigger className="text-black w-full">
                                    <SelectValue placeholder="Choisir"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel className="text-black">Sélectionnez un service</SelectLabel>
                                        <SelectItem className="text-black" value="web">Développement Web</SelectItem>
                                        <SelectItem className="text-black" value="uiux">UI/UX Design</SelectItem>
                                        <SelectItem className="text-black" value="logo">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className="text-black h-[200px]" 
                                placeholder="Entrez votre message."
                            />
                            <Button size="mg" className="max-w-56">Envoyez votre message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#f1d2ae] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-black/60 ">{item.title}</p>
                                        <h3 className="text-black text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
