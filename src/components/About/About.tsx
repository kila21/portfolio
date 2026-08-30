import styled from "styled-components";
import { Section } from "../common/Section";

const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Redux", "Angular", "Next.js"],
  },
  { label: "Styling", skills: ["CSS3", "Styled Components", "Tailwind CSS"] },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "Django", "Django REST", "PostgreSQL"],
  },
  { label: "SAP", skills: ["SAPUI5", "OData V2 / V4", "SAP BTP", "SAP CAP"] },
  { label: "Tooling", skills: ["Git", "Vite", "Postman", "Figma"] },
];

export const About = () => (
  <Section id="about" kicker="03 / About" title="A bit about me">
    <Grid>
      <Prose>
        <p>
          I'm a React developer who cares about the details — performance,
          accessibility, and interfaces that feel calm to use. Most of what I
          know comes from building and shipping real projects rather than a
          classroom.
        </p>
        <p>
          My core stack is <strong>React</strong> and{" "}
          <strong>TypeScript</strong> with <strong>Redux</strong> for state, but
          I've also worked in <strong>Angular</strong> and built REST APIs with{" "}
          <strong>Python</strong> and <strong>Django</strong>. Seeing the whole
          system helps me build frontends that fit the backend cleanly.
        </p>
        <p>
          Right now I'm a <strong>SAP Fiori Developer</strong> at{" "}
          <strong>LeverX</strong>, working with SAPUI5 and OData and getting into
          SAP CAP and BTP. Outside of work I keep learning through side projects
          and courses.
        </p>
        <p>
          If you're hiring, need a hand on a project, or just want to talk
          frontend — <a href="#contact">get in touch</a>.
        </p>
      </Prose>

      <Skills>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <SkillLabel>{group.label}</SkillLabel>
            <SkillItems>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </SkillItems>
          </div>
        ))}
      </Skills>
    </Grid>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: ${(props) => props.theme.spacing.xxl};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

const Prose = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 1.05rem;

  strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    border-bottom: 1px solid ${(props) => props.theme.colors.accent};
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`;

const SkillLabel = styled.h3`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const SkillItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.md};
  list-style: none;

  li {
    font-size: 0.95rem;
    color: ${(props) => props.theme.colors.text};
  }
`;
