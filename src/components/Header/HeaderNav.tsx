import styled from "styled-components";
import { HeaderNavItem } from "./HeaderNavItem";
import { useEffect, useState } from "react";

export const HeaderNav = () => {
  const [activeNum, setActiveNum] = useState(0);
  const [screen, setScreen] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreen(window.innerWidth);
    console.log(screen);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <HeaderNavContainerStyled>
      {screen >= 1024 && (
        <HeaderNavigation>
          <HeaderNavItem
            title="about"
            active={activeNum === 0 && true}
            click={() => setActiveNum(0)}
          />
          <HeaderNavItem
            title="experience"
            active={activeNum === 1 && true}
            click={() => setActiveNum(1)}
          />
          <HeaderNavItem
            title="projects"
            active={activeNum === 2 && true}
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
