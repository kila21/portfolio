import { css } from "styled-components";

export const scrollReveal = css<{ $visible?: boolean }>`
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateY(${(props) => (props.$visible ? "0" : "16px")});
  transition:
    opacity ${(props) => props.theme.transitions.slow},
    transform ${(props) => props.theme.transitions.slow};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
