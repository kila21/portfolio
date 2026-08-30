import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type Variant = "primary" | "secondary";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
};

const base = css<{ $variant: Variant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: 12px 22px;
  border-radius: ${(props) => props.theme.radii.pill};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  transition:
    transform ${(props) => props.theme.transitions.fast},
    background-color ${(props) => props.theme.transitions.base},
    border-color ${(props) => props.theme.transitions.base},
    color ${(props) => props.theme.transitions.base};

  border: 1px solid
    ${(props) =>
      props.$variant === "primary"
        ? props.theme.colors.accent
        : props.theme.colors.line};
  background-color: ${(props) =>
    props.$variant === "primary" ? props.theme.colors.accent : "transparent"};
  color: ${(props) =>
    props.$variant === "primary"
      ? props.theme.colors.accentText
      : props.theme.colors.text};

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) =>
      props.$variant === "primary"
        ? props.theme.colors.accentText
        : props.theme.colors.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const StyledLink = styled.a<{ $variant: Variant }>`
  ${base}
`;
const StyledButton = styled.button<{ $variant: Variant }>`
  ${base}
`;

export const ButtonLink = ({
  variant = "primary",
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <StyledLink $variant={variant} {...rest}>
    {children}
  </StyledLink>
);

export const Button = ({
  variant = "primary",
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton $variant={variant} {...rest}>
    {children}
  </StyledButton>
);
