import styled from "styled-components";
import { Tag } from "../common/Tag";

export const ExperienceItem = (props: {
  date: string;
  title: string;
  organization?: string;
  text: string;
  tools: string[];
  isCurrent?: boolean;
  isLast?: boolean;
}) => {
  return (
    <ExperienceItemStyled>
      <TimelineColumn>
        <TimelineDot $current={props.isCurrent} />
        {!props.isLast && <TimelineLine />}
      </TimelineColumn>

      <ExperienceCard>
        <DateRow>
          <DateBadge>{props.date}</DateBadge>
          {props.isCurrent && <CurrentBadge>Present</CurrentBadge>}
        </DateRow>

        <ExperienceItemTitle>
          {props.title}
          {props.organization && (
            <Organization> — {props.organization}</Organization>
          )}
        </ExperienceItemTitle>

        <ExperienceItemText>{props.text}</ExperienceItemText>

        <ExperienceToolsContainer>
          {props.tools.map((tool, i) => (
            <Tag key={tool + i} text={tool} />
          ))}
        </ExperienceToolsContainer>
      </ExperienceCard>
    </ExperienceItemStyled>
  );
};

const ExperienceItemStyled = styled.div`
  display: flex;
  align-items: stretch;
`;

const TimelineColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing.lg};
`;

const TimelineDot = styled.div<{ $current?: boolean }>`
  width: 14px;
  height: 14px;
  min-height: 14px;
  border-radius: 50%;
  margin-top: 26px;
  background-color: ${(props) =>
    props.$current
      ? props.theme.colors.accent.turquoise
      : props.theme.colors.background.surfaceRaised};
  border: 2px solid
    ${(props) =>
      props.$current
        ? props.theme.colors.accent.turquoise
        : props.theme.colors.border};
  box-shadow: ${(props) =>
    props.$current ? `0 0 0 4px ${props.theme.colors.accent.turquoiseMuted}` : "none"};
`;

const TimelineLine = styled.div`
  flex: 1;
  width: 2px;
  min-height: 30px;
  margin-top: 4px;
  background-color: ${(props) => props.theme.colors.border};
`;

const ExperienceCard = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.background.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  transition: transform ${(props) => props.theme.transitions.base},
    box-shadow ${(props) => props.theme.transitions.base},
    border-color ${(props) => props.theme.transitions.base};

  @media (min-width: ${(props) => props.theme.breakpoints.nav}) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${(props) => props.theme.shadows.sm};
      border-color: ${(props) => props.theme.colors.accent.turquoiseMuted};
    }
  }
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`;

const DateBadge = styled.span`
  color: ${(props) => props.theme.colors.text.muted};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

const CurrentBadge = styled.span`
  color: ${(props) => props.theme.colors.accent.turquoise};
  background-color: ${(props) => props.theme.colors.accent.turquoiseMuted};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: ${(props) => props.theme.radii.pill};
`;

const ExperienceItemTitle = styled.h4`
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: ${(props) => props.theme.spacing.sm};
  word-spacing: 2px;
  letter-spacing: 0.5px;
  font-size: 18px;
`;

const Organization = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 400;
`;

const ExperienceItemText = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 1.7;
  margin-top: ${(props) => props.theme.spacing.sm};
`;

const ExperienceToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => props.theme.spacing.md};
`;
