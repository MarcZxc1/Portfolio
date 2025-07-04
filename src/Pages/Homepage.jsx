import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../App.css";
import me from "../assets/me.png";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import gear from "../assets/gear1.png";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#090040] to-[#471396]">
      <div className="flex-1 flex flex-col justify-center px-6 py-10 md:px-12 md:py-16 text-white relative">
        <div className="absolute top-93 left-12 flex flex-col md:flex-row gap-4 z-10">
          <a
            href="https://www.facebook.com/snowballuosay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-blue-700 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-300 transition" />
          </a>
          <a
            href="https://github.com/MarcZxc1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-black transition" />
          </a>
        </div>

        <img
          src={box1}
          alt="box1"
          className="w-24 h-16 mb-6 hidden sm:block box1"
          loading="lazy"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Marc Gerald!
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center mb-4">
          Aspiring{" "}
          <span className="text-yellow-300 flex items-center ml-2">
            Full-Stack Developer{" "}
            <img
              src={gear}
              alt="gear"
              className="w-6 h-6 md:w-8 md:h-8 ml-2 animate-spin-slow gear"
            />
          </span>
        </h2>
        <p className="mb-6 max-w-lg text-base sm:text-lg">
          Strong in building web solutions and solving complex problems.
          Passionate about both frontend and backend development.
        </p>
        <div className="flex gap-4 flex-wrap mt-5">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
            Hire me?
          </button>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">
            Download CV
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative py-10 md:py-0">
        <img
          src={box2}
          alt="box2"
          className="absolute top-4 right-4 w-20 h-14 md:w-24 md:h-16 opacity-80 box2"
          loading="lazy"
        />
        <img
          src={me}
          alt="Marc Gerald"
          className="rounded-full border-4 border-yellow-400 shadow-lg w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default Homepage;
