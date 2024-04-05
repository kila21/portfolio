import styled from "styled-components";

export const About = () => {
  return (
    <AboutStyled id="about">
      <AboutTitle>About</AboutTitle>
      <AboutText>
        Hey there! I'm Luka Kilasonia, a passionate junior front-end developer
        with a love for crafting engaging and user-friendly web experiences. I'm
        fascinated by the intersection of design and technology, and I thrive on
        the challenges of bringing creative concepts to life through code.
      </AboutText>

      <AboutText>
        I recently completed <strong>TBC Angular Course</strong>, where I
        learned a lot about <strong>Angular</strong>,{" "}
        <strong>Typescript</strong> and <strong>Git</strong> and gained hands-on
        experience building responsive and accessible web applications with
        group.
      </AboutText>

      <AboutText>
        After that I start a job as a Freelance Junior Angular Developer, Where
        I learn state managment for Angular, And Work for Website where my job
        was to rewrite some functions and implement new design.some kind of
        rewrite proccess.
      </AboutText>

      <AboutText>
        Right Now, My Main library Is <strong>React</strong>, Which I learned
        from udemy, youtube and Google,( myself).My goal is to continue learning
        and growing as a developer while contributing to impactful projects that
        make a difference. I'm excited about the possibilities that lie ahead in
        this dynamic and ever-evolving field.
      </AboutText>

      <AboutText>
        Feel free to reach out to me to discuss potential collaborations,
        project opportunities, or just to chat about all things front-end
        development. Let's create something awesome together!
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

  & > strong {
    color: white;
  }
`;
