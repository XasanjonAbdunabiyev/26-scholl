import React from "react";

import style from "./style.module.scss";

import { motion } from "framer-motion";

export default function StudentCard({ imageUrl, cardTitle }) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
      animate={{
        y: 60,
        x: 20
      }}
      transition={{
        duration: 0.1
      }}
      className={style.student_card_container}
    >
      <div className={style.student_card_overlay}></div>
      <img src={imageUrl} alt="" />

      <div className={style.students_text}>
        <span>{cardTitle}</span>
      </div>
    </motion.div>
  );
}
