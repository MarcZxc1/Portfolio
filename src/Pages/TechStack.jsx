import React from "react";
import { motion } from "framer-motion";

// Import icons
import java from "../assets/icons/java.svg";
import python from "../assets/icons/python.svg";
import js from "../assets/icons/javascript.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import reactLogo from "../assets/icons/react.svg";
import tw from "../assets/icons/tailwindcss.svg";
import sb from "../assets/icons/springboot.svg";
import exp from "../assets/icons/express.svg";
import postgre from "../assets/icons/postgres.svg";
import mongo from "../assets/icons/MongoDB.svg";
import sql from "../assets/icons/msql.png";
import php from "../assets/icons/phpmyadmin.svg";
import postman from "../assets/icons/postman.svg";

const categories = [
  {
    title: "Language",
    items: [
      { name: "Java", icon: java },
      { name: "JavaScript", icon: js },
      { name: "Python", icon: python },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "React", icon: reactLogo },
      { name: "Tailwind CSS", icon: tw },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: sb },
      { name: "Express JS", icon: exp },
      { name: "PostgreSQL", icon: postgre },
      { name: "MongoDB", icon: mongo },
      { name: "MySQL", icon: sql },
      { name: "phpMyAdmin", icon: php },
      { name: "Postman", icon: postman },
    ],
  },
];

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-[#090040] to-[#471396] min-h-screen flex flex-col items-center px-2 sm:px-4"
    >
      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-8 sm:mb-12">
        Tech Stack
      </h1>

      {/* Grid content */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full text-white border-2 border-[#B13BFF] shadow-[0_0_20px_rgba(59,130,246,0.8)] rounded-3xl p-4 md:p-6 bg-opacity-60 backdrop-blur"
          >
            <h1 className="mb-4 text-base sm:text-lg md:text-xl font-semibold">
              {category.title}
            </h1>
            <div className="w-full grid grid-cols-3 gap-4 sm:gap-6 md:gap-9">
              {category.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transform hover:scale-125 transition duration-300"
                  />
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
