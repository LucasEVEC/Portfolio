"use client";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

function TypeWriter() {
  const [text] = useTypewriter({
    words: ["Lucas Evec","Développeur Web", "UI/UX Designer", "Graphiste", "Papa"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCursorVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="text-accent">
      {text}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Cursor />
      </motion.span>
    </span>    
  );
}

export default TypeWriter;
