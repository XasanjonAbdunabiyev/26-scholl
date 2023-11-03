import React from "react";

import AnimatedText from "./AnimatedText";

import { motion } from "framer-motion";

export default function AnimationTextShow() {
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "heading2",
      text: "About school",
    },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="my-2 overflow-hidden max-[900px]:my-4" variants={container}>
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
