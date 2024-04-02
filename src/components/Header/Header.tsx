import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderName>luka kilasonia</HeaderName>
      <HeaderPosition>Junior Front Developer(React)</HeaderPosition>
      <HeaderText>
        I build pixel-perfect, engaging, and accessible digital experiences.
      </HeaderText>
      <HeaderNav />
      <IconsContainer>
        <a target="_blank" href="https://github.com/kila21">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/luka-kilasonia-937a9a211/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a target="_blank" href="https://www.facebook.com/killlllllllllla/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/killlllllllllaa?fbclid=IwAR2Hxb_wonJFzOlllMZf38tWU37FSrIPp0F7O55S0PijhoCQrtH9bwItSm8"
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
  /* margin-top: 50px; */

  @media (min-width: 1025px) {
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
  color: ${(props) => props.theme.colors.white};
  @media (min-width: 1025px) {
    font-size: 4vw;
  }
`;

const HeaderPosition = styled.h4`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.white};
  margin-top: 15px;
  @media (min-width: 1025px) {
    font-size: 2vw;
  }
`;

const HeaderText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey};
  line-height: 1.6;
  text-align: center;
  margin-top: 20px;
  word-spacing: 2px;
  width: 90%;

  @media (min-width: 1025px) {
    font-size: 1.5vw;
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
      color: ${(props) => props.theme.colors.grey};
      margin-right: 20px;
      &:hover {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;
