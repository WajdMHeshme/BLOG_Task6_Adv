import { useState } from "react";
import { Link } from "react-router-dom";
import { NavData } from "../../Data";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";

interface NavBarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const NavBar = ({ isDark, toggleDark }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="relative z-50">
      <div className="container m-auto py-2.5 px-5">
        <nav className="h-[60px] flex justify-between items-center">
          <div>
            <Link
              className="text-[20px] text-darkText dark:text-white font-[600]"
              to="/"
              onClick={() => setActiveIndex(null)}
            >
              Your Name
            </Link>
          </div>

          <ul className="hidden lg:flex gap-[14px] items-center">
            {NavData.map((element, index) => (
              <li key={index}>
                <Link
                  to={element.link || "#"}
                  onClick={() => setActiveIndex(index)}
                  className={`p-2 text-[20px] border-b-2 transition ${
                    activeIndex === index
                      ? "border-darkText dark:border-white"
                      : "border-transparent hover:border-darkText dark:hover:border-white"
                  }`}
                >
                  {element.label}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <button
                onClick={toggleDark}
                className={`w-[60px] h-[30px] rounded-full px-2 flex items-center justify-between relative transition-colors duration-300 cursor-pointer ${
                  isDark ? "bg-white" : "bg-[#0f172a]"
                }`}
              >
                <IoMoonOutline
                  className={`text-[16px] z-10 ${
                    isDark ? "text-black" : "text-white"
                  }`}
                />
                <MdOutlineWbSunny
                  className={`text-[16px] z-10 ${
                    isDark ? "text-black" : "text-white"
                  }`}
                />
                <span
                  className={`absolute w-[20px] h-[20px] rounded-full transition-all duration-300 ${
                    isDark ? "bg-black right-1" : "bg-white left-1"
                  }`}
                ></span>
              </button>
            </li>
          </ul>

          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <SlMenu className="text-[20px]" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full p-5 space-y-10">
          <div>
            <Link
              to="/"
              className="text-3xl font-bold text-darkText dark:text-white"
              onClick={() => {
                setActiveIndex(null);
                setIsMenuOpen(false);
              }}
            >
              Your Name
            </Link>
          </div>

          <ul className="flex flex-col gap-6 items-center">
            {NavData.map((element, index) => (
              <li key={index}>
                <Link
                  to={element.link || "#"}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsMenuOpen(false);
                  }}
                  className={`p-2 text-[20px] border-b-2 transition ${
                    activeIndex === index
                      ? "border-darkText dark:border-white"
                      : "border-transparent hover:border-darkText dark:hover:border-white"
                  }`}
                >
                  {element.label}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <button
              onClick={toggleDark}
              className={`w-[60px] h-[30px] rounded-full px-2 flex items-center justify-between relative transition-colors duration-300 cursor-pointer ${
                isDark ? "bg-white" : "bg-[#0f172a]"
              }`}
            >
              <IoMoonOutline
                className={`text-[16px] z-10 ${
                  isDark ? "text-black" : "text-white"
                }`}
              />
              <MdOutlineWbSunny
                className={`text-[16px] z-10 ${
                  isDark ? "text-black" : "text-white"
                }`}
              />
              <span
                className={`absolute w-[20px] h-[20px] rounded-full transition-all duration-300 ${
                  isDark ? "bg-black right-1" : "bg-white left-1"
                }`}
              ></span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold mt-10"
            aria-label="Close menu"
          >
            <VscChromeClose className="text-darkTheme dark:text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
