import styled from "styled-components";
import { HeaderNavItem } from "./HeaderNavItem";
import { useEffect, useState } from "react";

const sections = [
  { href: "about", title: "about" },
  { href: "experience", title: "experience" },
  { href: "projects", title: "projects" },
];

export const HeaderNav = () => {
  const [activeNum, setActiveNum] = useState(0);

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderNavContainerStyled>
      <HeaderNavigation>
        {sections.map((section, i) => (
          <HeaderNavItem
            key={section.href}
            href={section.href}
            title={section.title}
            active={activeNum === i}
            click={() => setActiveNum(i)}
          />
        ))}
      </HeaderNavigation>

      <HeaderNavigationCompact>
        {sections.map((section, i) => (
          <HeaderNavItem
            key={section.href}
            href={section.href}
            title={section.title}
            active={activeNum === i}
            click={() => setActiveNum(i)}
            compact
          />
        ))}
      </HeaderNavigationCompact>
    </HeaderNavContainerStyled>
  );
};

const HeaderNavContainerStyled = styled.div`
  width: 90%;
  margin-top: ${(props) => props.theme.spacing.xl};
`;

const HeaderNavigation = styled.nav`
  display: none;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    display: flex;
  }
`;

const HeaderNavigationCompact = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.lg};
  list-style: none;
  padding: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    display: none;
  }
`;
