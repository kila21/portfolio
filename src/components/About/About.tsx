import styled from "styled-components";
import { Tag } from "../common/Tag";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { scrollReveal } from "../../styles/scrollReveal";

const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Redux", "Angular", "HTML5"],
  },
  {
    label: "Styling",
    skills: ["CSS3", "Styled Components", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "Django", "Django REST Framework"],
  },
  {
    label: "SAP",
    skills: ["SAPUI5", "OData V2 / V4", "SAP BTP", "SAP Workzone"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Claude"],
  },
];

export const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <AboutStyled id="about" ref={ref} $visible={isVisible}>
      <AboutTitle>About</AboutTitle>
      <AboutText>
        Hey there! I'm Luka Kilasonia, a <strong>React developer</strong> with
        hands-on experience building responsive web applications through
        personal projects and a deployed portfolio. I'm fascinated by the
        intersection of design and technology, and I thrive on the challenges
        of bringing creative concepts to life through code.
      </AboutText>

      <AboutText>
        My main library is <strong>React</strong>, alongside{" "}
        <strong>Redux</strong> for state management, but I'm not just a
        frontend specialist — I'm also comfortable working with{" "}
        <strong>Angular</strong> and have backend experience building APIs
        with <strong>Python</strong> and <strong>Django</strong>. That
        full-picture view of an application helps me build frontends that fit
        cleanly with whatever is powering them.
      </AboutText>

      <AboutText>
        Right now, I'm working as a <strong>SAP Fiori Developer</strong> at{" "}
        <strong>LeverX</strong>, building foundational skills in{" "}
        <strong>SAPUI5</strong> and <strong>OData</strong>, with a growing
        interest in SAP CAP. I'm continuously learning through personal
        projects and online courses, and I'm always looking for ways to
        connect what I already know with what's next.
      </AboutText>

      <AboutText>
        Feel free to reach out to me to discuss potential collaborations,
        project opportunities, or just to chat about all things front-end
        development. Let's create something awesome together!
      </AboutText>

      <SkillsContainer>
        {skillGroups.map((group) => (
          <SkillGroup key={group.label}>
            <SkillGroupLabel>{group.label}</SkillGroupLabel>
            <SkillTags>
              {group.skills.map((skill) => (
                <Tag key={skill} text={skill} />
              ))}
            </SkillTags>
          </SkillGroup>
        ))}
      </SkillsContainer>
    </AboutStyled>
  );
};

const AboutStyled = styled.div<{ $visible?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 50px;
  ${scrollReveal}
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 30px;
  }
`;

const AboutTitle = styled.h3`
  display: none;
  color: ${(props) => props.theme.colors.text.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.nav}) {
    display: flex;
  }
`;

const AboutText = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.text.secondary};
  margin-top: 20px;

  & > strong {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillGroupLabel = styled.h5`
  color: ${(props) => props.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 13px;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
