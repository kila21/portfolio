import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { HeaderNav } from "./HeaderNav";
import { useTypewriterLoop } from "../../hooks/useTypewriterLoop";

const FULL_NAME = "luka kilasonia";
const POSITION = "React Developer";

export const Header = () => {
  const typedName = useTypewriterLoop(FULL_NAME, { pauseMs: 2200 });
  const typedPosition = useTypewriterLoop(POSITION, {
    typeSpeed: 70,
    pauseMs: 2000,
  });

  return (
    <HeaderStyled>
      <HeaderName aria-label={FULL_NAME}>
        <span aria-hidden="true">
          {typedName}
          <Cursor />
        </span>
      </HeaderName>
      <HeaderPosition aria-label={POSITION}>
        <span aria-hidden="true">
          {typedPosition}
          <Cursor />
        </span>
      </HeaderPosition>
      <HeaderText>
        A <Highlight>React developer</Highlight> with a full-stack mindset —
        I build pixel-perfect, accessible interfaces, and I'm just as
        comfortable working with the <Highlight>backend</Highlight> and{" "}
        <Highlight>SAP systems</Highlight> that power them.
      </HeaderText>
      <HeaderNav />
      <IconsContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kila21"
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/luka-kilasonia-937a9a211/"
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/killlllllllllla/"
          aria-label="Facebook profile"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/killlllllllllaa"
          aria-label="Instagram profile"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </IconsContainer>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  /* margin-top: 50px; */

  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    width: 50%;
    height: 100%;
    position: sticky;
    top: 0;
    max-height: 100vh;
  }
`;

const HeaderName = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 800;
  min-height: 1.2em;
  color: ${(props) => props.theme.colors.text.primary};
  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    font-size: 4vw;
  }
`;

const blink = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.5ch;
  margin-left: 4px;
  border-right: 3px solid ${(props) => props.theme.colors.accent.turquoise};
  animation: ${blink} 1s step-start infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

const HeaderPosition = styled.h4`
  font-size: 18px;
  font-weight: 300;
  min-height: 1.4em;
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: 15px;
  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    font-size: 2vw;
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.accent.turquoise};
  font-weight: 700;
`;

const HeaderText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 1.8;
  text-align: center;
  margin-top: 24px;
  max-width: 42ch;

  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    font-size: 1.15vw;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 40px;

  & > a {
    outline: none;
    & > svg {
      width: 25px;
      height: 25px;
      color: ${(props) => props.theme.colors.text.secondary};
      margin-right: 20px;
      transition: color ${(props) => props.theme.transitions.fast};
      &:hover {
        color: ${(props) => props.theme.colors.text.primary};
      }
    }
  }
`;
