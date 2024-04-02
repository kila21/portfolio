import styled from "styled-components";

export const About = () => {
  return (
    <AboutStyled id="about">
      <AboutTitle>About</AboutTitle>
      <AboutText>
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an Back in 2012, I decided to try my hand at
        creating custom Tumblr themes and tumbled head first into the rabbit
        hole of coding and web development. Fast-forward to today, and I’ve had
        the privilege of building software for an Back in 2012, I decided to try
        my hand at creating custom Tumblr themes and tumbled head first into the
        rabbit hole of coding and web development. Fast-forward to today, and
        I’ve had the privilege of building software for an Back in 2012, I
        decided to try my hand at creating custom Tumblr themes and tumbled head
        first into the rabbit hole of coding and web development. Fast-forward
        to today, and I’ve had the privilege of building software for an Back in
        2012, I decided to try my hand at creating custom Tumblr themes and
        tumbled head first into the rabbit hole of coding and web development.
        Fast-forward to today, and I’ve had the privilege of building software
        for an
      </AboutText>
    </AboutStyled>
  );
};

const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 50px;
`;

const AboutTitle = styled.h3`
  display: none;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const AboutText = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.grey};
  margin-top: 20px;
`;
