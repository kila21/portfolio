import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { ThemeToggle } from "../common/ThemeToggle";
import { useActiveSection } from "../../hooks/useActiveSection";
import { profile } from "../../data/profile";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
] as const;

const SECTION_IDS = [...LINKS.map((l) => l.id), "contact"];

export const Nav = () => {
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <Bar>
      <Container>
        <Inner>
          <Brand href="#top" onClick={() => setOpen(false)}>
            {profile.name}
          </Brand>

          <DesktopLinks aria-label="Sections">
            {LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  href={`#${link.id}`}
                  $active={active === link.id}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </DesktopLinks>

          <Right>
            <ThemeToggle />
            <ContactLink href="#contact" $active={active === "contact"}>
              Contact
            </ContactLink>
            <MenuButton
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span data-open={open} />
              <span data-open={open} />
            </MenuButton>
          </Right>
        </Inner>
      </Container>

      <MobilePanel id="mobile-menu" data-open={open}>
        <Container>
          <ul>
            {[...LINKS, { id: "contact", label: "Contact" }].map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </MobilePanel>
    </Bar>
  );
};

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
  gap: ${(props) => props.theme.spacing.lg};
  height: 64px;
`;

const Brand = styled.a`
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const DesktopLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  margin-left: auto;
  list-style: none;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-size: 15px;
  color: ${(props) =>
    props.$active ? props.theme.colors.text : props.theme.colors.textMuted};
  position: relative;
  padding: 4px 0;
  transition: color ${(props) => props.theme.transitions.base};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1.5px;
    width: ${(props) => (props.$active ? "100%" : "0")};
    background-color: ${(props) => props.theme.colors.accent};
    transition: width ${(props) => props.theme.transitions.base};
  }

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
  &:hover::after {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

const ContactLink = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 9px 18px;
  border-radius: ${(props) => props.theme.radii.pill};
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme.colors.accent : props.theme.colors.line};
  font-size: 14px;
  font-weight: 600;
  transition: border-color ${(props) => props.theme.transitions.base},
    color ${(props) => props.theme.transitions.base};

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border-radius: ${(props) => props.theme.radii.pill};
  border: 1px solid ${(props) => props.theme.colors.line};

  span {
    display: block;
    width: 16px;
    height: 1.6px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.text};
    transition: transform ${(props) => props.theme.transitions.base},
      opacity ${(props) => props.theme.transitions.base};
  }
  span:first-child[data-open="true"] {
    transform: translateY(3.3px) rotate(45deg);
  }
  span:last-child[data-open="true"] {
    transform: translateY(-3.3px) rotate(-45deg);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const MobilePanel = styled.div`
  overflow: hidden;
  max-height: 0;
  border-bottom: 0 solid ${(props) => props.theme.colors.line};
  transition: max-height ${(props) => props.theme.transitions.base};

  &[data-open="true"] {
    max-height: 320px;
    border-bottom-width: 1px;
  }

  ul {
    list-style: none;
    padding: ${(props) => props.theme.spacing.sm} 0
      ${(props) => props.theme.spacing.md};
  }
  a {
    display: block;
    padding: ${(props) => props.theme.spacing.md} 0;
    font-size: 17px;
    color: ${(props) => props.theme.colors.textMuted};
    border-bottom: 1px solid ${(props) => props.theme.colors.line};
  }
  li:last-child a {
    border-bottom: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
