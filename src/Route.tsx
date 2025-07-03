import { useState, useEffect } from "react";
import NavBar from "./components/nav/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ScrollBtn from "./components/scrollToTopButton/ScrollBtn";
const Route = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [isDark]);

  return (
    <div className="font-Inter bg-white dark:bg-darkTheme text-black dark:text-white min-h-screen">
      <NavBar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <ScrollToTop />
      <ScrollBtn />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Route;
