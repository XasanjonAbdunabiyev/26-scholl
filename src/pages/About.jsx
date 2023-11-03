import * as React from "react";

import about_hero from "../assets/about-hero.jpg";
import AnimationTextShow from "../components/AnimationTextShow";

import { motion } from "framer-motion";

import style from "./index.module.scss";

export const About = () => {
  return (
    <div className="about bg-gray-300 p-12">
      <div className="pb-2">
        <AnimationTextShow />
      </div>
      <div className="container">
        <div className="flex items-center gap-10 justify-between max-[1030px]:flex-col max-[1030px]:items-start">
          <div className="max-w-xl max-[1300px]:max-w-md max-[1030px]:max-w-full">
            <p
              style={{ fontFamily: "Inria Serif" }}
              className="text-[29px] max-[900px]:text-[22px]"
            >
              The 26th general school under the Ministry of Public Education of
              Uzbekistan was founded in 1984. Our school can meet modern and
              quality education standards with modern equipments to get enough
              knowledge
            </p>
          </div>
          <div className={style.imageCardContainer}>
            <motion.img
              whileTap={{
                scale: 1.1,
              }}
              src={about_hero}
              className={style.imageCard}
              alt="about-hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
