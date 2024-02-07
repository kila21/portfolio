import styled from "styled-components";

export const HeaderNav = () => {
  return (
    <HeaderNavContainerStyled>
      <HeaderNavigation>
        <HeaderNavItem>
          <HeaderNavItemLink>
            <HeaderNavItemIndicator></HeaderNavItemIndicator>
            <HeaderNavItemtext>about</HeaderNavItemtext>
          </HeaderNavItemLink>
        </HeaderNavItem>
      </HeaderNavigation>
    </HeaderNavContainerStyled>
  );
};

const HeaderNavContainerStyled = styled.div`
  width: 100%;
`;

const HeaderNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

const HeaderNavItem = styled.li`
  list-style: none;
`;

const HeaderNavItemLink = styled.a`
  outline: none;
  text-align: center;
`;

const HeaderNavItemIndicator = styled.span``;

const HeaderNavItemtext = styled.span`
  color: ${(props) => props.theme.colors.grey};
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
