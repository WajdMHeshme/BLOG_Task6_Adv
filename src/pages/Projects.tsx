import { useEffect, useState } from "react";
import FuzzyText from "../components/error/Error";

const Projects = () => {
  const [fontSize, setFontSize] = useState(getResponsiveFontSize());

  function getResponsiveFontSize(): string {
    const minWidth = 320;
    const maxWidth = 1920;
    const minFontSize = 1;  // rem
    const maxFontSize = 6;  // rem

    const width = Math.min(Math.max(window.innerWidth, minWidth), maxWidth);

    const fontSize = minFontSize + ((width - minWidth) / (maxWidth - minWidth)) * (maxFontSize - minFontSize);

    return `${fontSize.toFixed(2)}rem`;
  }

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getResponsiveFontSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen text-darkTheme dark:text-white" data-aos = "fade">
      <FuzzyText
        fontSize={fontSize}
        fontWeight={800}
        baseIntensity={0.2}
        color="#EF4444"
        hoverIntensity={0.5}
        enableHover={true}
      >
     404 Page Not Found !
      </FuzzyText>
    </div>
  );
};

export default Projects;
