import styled from "styled-components";
import { ExperienceItem } from "./ExperienceItem";
import { experience } from "../../data/experience";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { scrollReveal } from "../../styles/scrollReveal";

export const Experience = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <ExperienceStyled id="experience" ref={ref} $visible={isVisible}>
      <ExperienceTitle>Experience</ExperienceTitle>

      <TimelineList>
        {experience.map((entry, i) => (
          <ExperienceItem
            key={entry.id}
            date={entry.dateLabel}
            title={entry.title}
            organization={entry.organization}
            text={entry.text}
            tools={entry.tools}
            isCurrent={entry.isCurrent}
            isLast={i === experience.length - 1}
          />
        ))}
      </TimelineList>

      <ExperienceResume target="_blank" rel="noopener noreferrer" href="/resume.pdf">
        View Full Resume
      </ExperienceResume>
    </ExperienceStyled>
  );
};

const ExperienceStyled = styled.div<{ $visible?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 50px;
  ${scrollReveal}
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 30px;
  }
`;

const ExperienceTitle = styled.h3`
  display: none;
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  @media (max-width: ${(props) => props.theme.breakpoints.nav}) {
    display: flex;
  }
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacing.md};
`;

const ExperienceResume = styled.a`
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: 30px;
  font-size: 19px;
  letter-spacing: 2px;
  text-decoration: none;
  outline: none;
  transition: color ${(props) => props.theme.transitions.fast};

  &:hover {
    color: ${(props) => props.theme.colors.accent.turquoise};
  }
`;
