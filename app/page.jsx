"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypeWriter from "@/components/Typewriter";

const Home = () => {
  const [photoVisible, setPhotoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhotoVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full">
      <div className="container h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4B xl:pb-12">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 text-black">Bonjour</h1>
            <div className="h2 text-black">
              je suis <TypeWriter />
            </div>
            <p className="max-w-[500px] mb-9 text-black">
              Je conçois des expériences numériques élégantes et intuitives, alliant créativité et fonctionnalité.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Lucas CAZENAVE.pdf" download className="uppercase flex items-center gap-2">
                <Button variant="outline" size="lg">
                  <span>Téléchargez mon CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <motion.div 
            className="order-1 xl:order-none mb-8 xl:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: photoVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Photo />
          </motion.div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
