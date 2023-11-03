import React from "react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="p-14 h-[90vh] relative overflow-hidden">
      <div className="container">
        <div className="banner-logo">
          <img src="/images/banner-image.png" alt="" />
        </div>
        <div className="mx-auto absolute rounded-lg top-40 right-0 bg-[#F2F5FD] text-center w-[70%] p-10 max-[1000px]:top-80 max-[900px]:w-[90%] max-[500px]:w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 9,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <h1 className="text-[#1A0EA9] mx-auto w-[60%] font-bold text-3xl max-[1200px]:w-[90%] leading-loose max-[900px]:text-2xl max-[500px]:w-full">
              Ministry of Public Education of Republic of Uzbekistan
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
