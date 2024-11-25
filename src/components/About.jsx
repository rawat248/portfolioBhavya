import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About me</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full "
      >
        <div className="justify-center">
          <p>{ABOUT_TEXT}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
