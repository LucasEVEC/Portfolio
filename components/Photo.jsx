"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center items-center w-full h-full relative">
      <motion.div 
        initial={{opacity:0}}
        animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn"},
            }}
      >
        {/* Image with gradient mask */}
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full absolute overflow-hidden">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="grad">
                <stop offset="50%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
              </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="black" mask="url(#mask)" />
          </svg>
          <Image 
            src="/assets/profile-picture.jpg"
            priority
            quality={100}
            layout="fill"
            alt=""
            className="object-cover"
            style={{ mask: 'url(#mask)', WebkitMask: 'url(#mask)' }}
          />
        </div>

        {/* circle */}
        <motion.svg 
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration:20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </motion.svg>

      </motion.div>
    </div>
  )
}

export default Photo;
