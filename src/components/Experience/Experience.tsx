import styled from "styled-components";
import { Section } from "../common/Section";
import { Tag, TagList } from "../common/Tag";
import { experience } from "../../data/experience";
import { profile } from "../../data/profile";

export const Experience = () => (
  <Section id="experience" kicker="02 / Experience" title="Where I've worked">
    <List>
      {experience.map((entry) => (
        <Item key={entry.id}>
          <When>
            {entry.dateLabel}
            {entry.isCurrent && <Current>Now</Current>}
          </When>
          <Body>
            <Role>
              {entry.title}
              {entry.organization && <Org> · {entry.organization}</Org>}
            </Role>
            <Text>{entry.text}</Text>
            <TagList>
              {entry.tools.map((tool) => (
                <Tag key={tool} text={tool} />
              ))}
            </TagList>
          </Body>
        </Item>
      ))}
    </List>

    <ResumeLink href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
      View full résumé <span aria-hidden="true">↗</span>
    </ResumeLink>
  </Section>
);

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.article`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  padding: ${(props) => props.theme.spacing.xl} 0;
  border-top: 1px solid ${(props) => props.theme.colors.line};

  &:last-of-type {
    border-bottom: 1px solid ${(props) => props.theme.colors.line};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
    padding: ${(props) => props.theme.spacing.lg} 0;
  }
`;

const When = styled.p`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  color: ${(props) => props.theme.colors.textMuted};
  padding-top: 4px;
`;

const Current = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.accentSoft};
  padding: 2px 8px;
  border-radius: ${(props) => props.theme.radii.pill};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const Role = styled.h3`
  font-size: 1.35rem;
`;

const Org = styled.span`
  color: ${(props) => props.theme.colors.textMuted};
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  max-width: 58ch;
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.xl};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent};
  border-bottom: 1px solid transparent;
  transition: border-color ${(props) => props.theme.transitions.base};

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;
