import styled from "styled-components";

export const HeaderNavItem = (props: {
  title: string;
  active: boolean;
  href: string;
  click: () => void;
}) => {
  return (
    <HeaderNavItemStyled onClick={props.click}>
      <HeaderNavItemLink $active={props.active} href={"#" + props.href}>
        <HeaderNavItemIndicator></HeaderNavItemIndicator>
        <HeaderNavItemtext>{props.title}</HeaderNavItemtext>
      </HeaderNavItemLink>
    </HeaderNavItemStyled>
  );
};

const HeaderNavItemStyled = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 40px;
  height: 20px;
`;

const HeaderNavItemLink = styled.a<{ $active: boolean }>`
  outline: none;
  height: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  & > span:nth-child(1) {
    background-color: ${(props) =>
      props.$active ? props.theme.colors.white : props.theme.colors.grey};

    width: ${(props) => props.$active && "64px"};
  }

  & > span:nth-child(2) {
    color: ${(props) =>
      props.$active ? props.theme.colors.white : props.theme.colors.grey};
  }

  &:hover {
    & > span:first-child {
      width: 64px;
      background-color: ${(props) => props.theme.colors.white};
    }

    & > span:last-child {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const HeaderNavItemIndicator = styled.span`
  width: 32px;
  height: 1px;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.grey};
  margin-right: 20px;
`;

const HeaderNavItemtext = styled.span`
  color: ${(props) => props.theme.colors.grey};
  text-transform: uppercase;
  letter-spacing: 2px;
`;
