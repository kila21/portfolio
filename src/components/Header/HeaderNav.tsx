import styled from "styled-components";
import { HeaderNavItem } from "./HeaderNavItem";
import { useEffect, useState } from "react";

export const HeaderNav = () => {
  const [activeNum, setActiveNum] = useState(0);
  const [screen, setScreen] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreen(window.innerWidth);
  };

  const handleScroll = () => {
    // make active nav link while scrolling

    const scrollPosition = window.scrollY;

    const aboutSection = document.getElementById("about")?.offsetTop;
    const experienceSection = document.getElementById("experience")?.offsetTop;
    const projectsSection = document.getElementById("projects")?.offsetTop;

    if (
      aboutSection &&
      scrollPosition >= aboutSection &&
      scrollPosition < experienceSection!
    ) {
      setActiveNum(0);
    } else if (
      experienceSection &&
      scrollPosition >= experienceSection &&
      scrollPosition < projectsSection!
    ) {
      setActiveNum(1);
    } else if (projectsSection && scrollPosition >= projectsSection) {
      setActiveNum(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderNavContainerStyled>
      {screen > 1024 && (
        <HeaderNavigation>
          <HeaderNavItem
            href="about"
            title="about"
            active={activeNum === 0}
            click={() => setActiveNum(0)}
          />
          <HeaderNavItem
            href="experience"
            title="experience"
            active={activeNum === 1}
            click={() => setActiveNum(1)}
          />
          <HeaderNavItem
            href="projects"
            title="projects"
            active={activeNum === 2}
            click={() => setActiveNum(2)}
          />
        </HeaderNavigation>
      )}
    </HeaderNavContainerStyled>
  );
};

const HeaderNavContainerStyled = styled.div`
  width: 90%;
  margin-top: 50px;
`;

const HeaderNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`;
