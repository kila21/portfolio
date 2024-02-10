import { useState } from "react";
import styled, { useTheme } from "styled-components";

export const HeaderNav = () => {
  const [active, setActive ] = useState(0)
  const navItems = ['about', 'experience', 'projects']

  const theme = useTheme()

  return (
    <HeaderNavContainerStyled>
      <HeaderNavigation>
        {navItems && navItems.map((item, index) => (
          <HeaderNavItem onClick={() => setActive(index)} key={index + item}>
            <HeaderNavItemLink>
              <HeaderNavItemIndicator style={{backgroundColor: active === index ? theme.colors.white : theme.colors.grey, width: active === index ? '80px' : '30px'}}></HeaderNavItemIndicator>
              <HeaderNavItemtext style={{color: active === index ? theme.colors.white : theme.colors.grey}}>{item}</HeaderNavItemtext>
            </HeaderNavItemLink>
        </HeaderNavItem>
        ))}
      </HeaderNavigation>
    </HeaderNavContainerStyled>
  );
};

const HeaderNavContainerStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeaderNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

const HeaderNavItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  cursor: pointer;
`;


const HeaderNavItemIndicator =  styled.span`
  display: inline-block;
  width: 30px;
  height: 1px;
  margin-right: 20px;
  background-color: ${props => props.theme.colors.grey};
`;

const HeaderNavItemtext = styled.span`
  color: ${(props) => props.theme.colors.grey};
  text-transform: uppercase;
`;

const HeaderNavItemLink = styled.a`
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;

  &:hover {
/*   
    & > ${HeaderNavItemIndicator} {
      background-color: ${(props) => props.theme.colors.white};
      width: 80px;
    }

    & > ${HeaderNavItemtext} {
      color: ${(props) => props.theme.colors.white};
    } */
  }

`;

