import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import styles from "../Components/Navigation.module.css";
import "../App.css";

const Navigation = () => {
  const navButtons = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Tech Stack",
      path: "/tech-stack",
    },
    {
      name: "About me",
      path: "/about-me",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-white">
      <nav
        className={`${styles["custom-navbar"]} relative w-screen h-16 flex items-center px-4`}
      >
        <div className="flex items-center">
          <img
            src={logo1}
            className="flex logo w-10 h-10 object-cover"
            alt="Logo1"
            loading="lazy"
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2  flex gap-4">
          {navButtons.map((button, index) => (
            <Link
              key={index}
              to={button.path}
              className="flex justify-center items-center text-white w-24 text-sm p-3 rounded-full bg-transparent hover:bg-yellow-400
              hover:scale-110 duration-100"
            >
              {button.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
