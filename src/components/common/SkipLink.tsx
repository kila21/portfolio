import styled from "styled-components";

export const SkipLink = styled.a`
  position: absolute;
  left: ${(props) => props.theme.spacing.md};
  top: ${(props) => props.theme.spacing.md};
  z-index: ${(props) => props.theme.z.skipLink};
  padding: 10px 16px;
  border-radius: ${(props) => props.theme.radii.sm};
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accentText};
  font-size: 14px;
  font-weight: 600;
  transform: translateY(-150%);
  transition: transform ${(props) => props.theme.transitions.fast};

  &:focus-visible {
    transform: translateY(0);
  }
`;
