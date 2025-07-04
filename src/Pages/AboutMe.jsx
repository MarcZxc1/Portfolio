import mengaba from "../assets/mengaba.png";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBirthdayCake,
  FaUserGraduate,
  FaCalendarAlt,
  FaLinkedin,
  FaSchool,
  FaBullseye,
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";
import "../App.css";

const AboutMe = () => {
  // Professional summary, education, goals, and motivation data
  const summary = {
    title: "Professional Summary",
    content: [
      "I'm a Software Developer specializing in React.js and Java Spring Boot.",
      "Currently focused on building modern, scalable web applications.",
      "I stand out for my passion for clean code, rapid learning, and delivering impactful solutions.",
    ],
  };

  const education = [
    {
      level: "Primary",
      school: "North Fairview Elementary School",
      years: "2010 - 2016",
      icon: <FaSchool className="text-blue-400 text-2xl" />,
    },
    {
      level: "Secondary",
      school: "North Fairview High School & Our Lady of Fatima",
      years: "2016 - 2023",
      icon: <FaSchool className="text-blue-400 text-2xl" />,
    },
    {
      level: "Tertiary",
      school: "Quezon City University",
      years: "2023 - Present",
      icon: <FaSchool className="text-blue-400 text-2xl" />,
      degree: "BS in Computer Science",
      graduation: "Expected: 2026-2027",
    },
  ];

  const goals = [
    "Master full-stack development with React and Spring Boot.",
    "Contribute to open-source projects.",
    "Land a software engineering internship.",
    "Build products that solve real-world problems.",
  ];

  const motivation = {
    mission:
      "I love solving real-world problems through clean and scalable code.",
    why: "My mission is to create software that makes a positive impact and helps others achieve more.",
  };

  const aboutMe = [
    {
      name: "Marc Gerald A. Dagode",
      age: 20,
      occupation: "Student",
      year: "3rd Year",
      graduation: "2026 - 2027",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-[#090040] to-[#471396] min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Main Card: Profile + Details (Right) */}
      <div className="flex w-full justify-start mb-8">
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-2xl w-full md:w-2/3 mt-5"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={mengaba}
            alt="Profile"
            className="rounded-full border-4 border-yellow-400 shadow-lg w-40 h-40 md:w-56 md:h-56 object-cover mb-4 md:mb-0 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
          <div className="flex flex-col gap-4 text-yellow-100 w-full">
            {aboutMe.map((details, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                  <FaUser className="text-yellow-400" />
                  <span>Name: {details.name}</span>
                </div>
                <div className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                  <FaBirthdayCake className="text-yellow-400" />
                  <span>Age: {details.age}</span>
                </div>
                <div className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                  <FaUserGraduate className="text-yellow-400" />
                  <span>
                    Occupation: {details.occupation} ({details.year})
                  </span>
                </div>
                <div className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                  <FaCalendarAlt className="text-yellow-400" />
                  <span>Graduation: {details.graduation}</span>
                </div>
              </div>
            ))}
            <motion.a
              href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 text-[#090040] font-bold rounded-full shadow hover:bg-yellow-300 transition-colors duration-200 self-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaLinkedin className="text-xl" /> Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Professional Summary (Center) */}
      <div className="flex w-full justify-center mb-8">
        <motion.div
          className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-2xl w-full md:w-2/3 flex flex-col gap-3 border-l-4 border-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaUser className="text-yellow-400 text-2xl" />
            <h2 className="text-xl font-bold text-yellow-100">
              {summary.title}
            </h2>
          </div>
          {summary.content.map((line, idx) => (
            <p key={idx} className="text-yellow-50 text-base md:text-lg">
              {line}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Education (Right) */}
      <div className="flex w-full justify-end mb-8">
        <motion.div
          className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-2xl w-full md:w-2/3 flex flex-col gap-4 border-l-4 border-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaSchool className="text-blue-400 text-2xl" />
            <h2 className="text-xl font-bold text-blue-100">Education</h2>
          </div>
          {/* Timeline Zigzag Structure */}
          <div className="relative flex flex-col items-center w-full mt-6">
            {/* Vertical Roadmap Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-400/60 -translate-x-1/2 z-0" />
            <div className="flex flex-col gap-12 w-full z-10">
              {education.map((edu, idx) => (
                <div key={idx} className="relative flex w-full">
                  {/* Left side card */}
                  {idx % 2 === 0 ? (
                    <div className="flex-1 flex justify-end pr-6 md:pr-12">
                      <div className="bg-blue-900/40 rounded-xl p-4 flex flex-col items-end shadow-md max-w-xs w-full">
                        {edu.icon}
                        <h3 className="text-blue-200 font-semibold text-lg mt-2">
                          {edu.level}
                        </h3>
                        <p className="text-blue-50 text-base text-right">
                          {edu.school}
                        </p>
                        <p className="text-blue-300 text-sm mt-1 text-right">
                          {edu.years}
                        </p>
                        {edu.degree && (
                          <p className="text-blue-100 text-sm mt-1 text-right">
                            {edu.degree}
                          </p>
                        )}
                        {edu.graduation && (
                          <p className="text-blue-200 text-xs mt-1 text-right">
                            {edu.graduation}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-blue-400 border-4 border-white shadow-lg" />
                  </div>
                  {/* Right side card */}
                  {idx % 2 === 1 ? (
                    <div className="flex-1 flex justify-start pl-6 md:pl-12">
                      <div className="bg-blue-900/40 rounded-xl p-4 flex flex-col items-start shadow-md max-w-xs w-full">
                        {edu.icon}
                        <h3 className="text-blue-200 font-semibold text-lg mt-2">
                          {edu.level}
                        </h3>
                        <p className="text-blue-50 text-base text-left">
                          {edu.school}
                        </p>
                        <p className="text-blue-300 text-sm mt-1 text-left">
                          {edu.years}
                        </p>
                        {edu.degree && (
                          <p className="text-blue-100 text-sm mt-1 text-left">
                            {edu.degree}
                          </p>
                        )}
                        {edu.graduation && (
                          <p className="text-blue-200 text-xs mt-1 text-left">
                            {edu.graduation}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Goals (Center) */}
      <div className="flex w-full justify-center mb-8">
        <motion.div
          className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-2xl w-full md:w-2/3 flex flex-col gap-2 border-l-4 border-green-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaBullseye className="text-green-400 text-2xl" />
            <h2 className="text-xl font-bold text-green-100">Goals</h2>
          </div>
          <ul className="list-disc list-inside text-green-50 text-base md:text-lg">
            {goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Motivation/Mission (Right) */}
      <div className="flex w-full justify-start mb-10">
        <motion.div
          className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-2xl w-full md:w-2/3 flex flex-col gap-2 border-l-4 border-yellow-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaLightbulb className="text-yellow-300 text-2xl" />
            <h2 className="text-xl font-bold text-yellow-100">
              Motivation & Mission
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <FaQuoteLeft className="text-yellow-200" />
            <span className="italic text-yellow-50 text-base md:text-lg">
              {motivation.mission}
            </span>
          </div>
          <p className="text-yellow-50 text-base md:text-lg mt-2">
            {motivation.why}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
