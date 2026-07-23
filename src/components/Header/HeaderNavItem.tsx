import styled from "styled-components";

export const HeaderNavItem = (props: {
  title: string;
  active: boolean;
  href: string;
  click: () => void;
  compact?: boolean;
}) => {
  return (
    <HeaderNavItemStyled $compact={props.compact}>
      <HeaderNavItemLink
        $active={props.active}
        $compact={props.compact}
        href={"#" + props.href}
        onClick={props.click}
      >
        {!props.compact && <HeaderNavItemIndicator></HeaderNavItemIndicator>}
        <HeaderNavItemtext>{props.title}</HeaderNavItemtext>
      </HeaderNavItemLink>
    </HeaderNavItemStyled>
  );
};

const HeaderNavItemStyled = styled.li<{ $compact?: boolean }>`
  list-style: none;
  display: flex;
  height: 20px;
  margin-bottom: ${(props) => (props.$compact ? "0" : "40px")};
`;

const HeaderNavItemLink = styled.a<{ $active: boolean; $compact?: boolean }>`
  outline: none;
  height: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: ${(props) => (props.$compact ? "4px" : "0")};
  border-bottom: ${(props) =>
    props.$compact
      ? `2px solid ${
          props.$active
            ? props.theme.colors.accent.turquoise
            : "transparent"
        }`
      : "none"};
  transition: border-color ${(props) => props.theme.transitions.base};

  & > span:nth-child(1) {
    background-color: ${(props) =>
      props.$active
        ? props.theme.colors.text.primary
        : props.theme.colors.text.secondary};

    width: ${(props) => (props.$active ? "64px" : "32px")};
  }

  & > span:last-child {
    color: ${(props) =>
      props.$active
        ? props.theme.colors.text.primary
        : props.theme.colors.text.secondary};
  }

  &:hover {
    ${(props) => (props.$compact ? `border-color: ${props.theme.colors.accent.turquoise};` : "")}

    & > span:first-child {
      width: 64px;
      background-color: ${(props) => props.theme.colors.text.primary};
    }

    & > span:last-child {
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
`;

const HeaderNavItemIndicator = styled.span`
  width: 32px;
  height: 1px;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.text.secondary};
  margin-right: 20px;
  transition: width ${(props) => props.theme.transitions.base},
    background-color ${(props) => props.theme.transitions.base};
`;

const HeaderNavItemtext = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  transition: color ${(props) => props.theme.transitions.base};
`;
