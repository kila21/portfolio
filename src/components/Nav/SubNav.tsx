import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../common/Container";
import { ThemeToggle } from "../common/ThemeToggle";
import { profile } from "../../data/profile";

/** Minimal header for inner pages (project detail, all projects). */
export const SubNav = () => (
  <Bar>
    <Container>
      <Inner>
        <Brand to="/">{profile.name}</Brand>
        <ThemeToggle />
      </Inner>
    </Container>
  </Bar>
);

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${(props) => props.theme.z.nav};
  background-color: ${(props) => props.theme.colors.bg};
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  backdrop-filter: saturate(1.4) blur(6px);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Brand = styled(Link)`
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 19px;
  font-weight: 600;
`;
