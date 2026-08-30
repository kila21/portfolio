import styled from "styled-components";
import { Container } from "../common/Container";
import { ButtonLink } from "../common/Button";
import { SocialLinks } from "../common/SocialLinks";
import { profile } from "../../data/profile";

export const Hero = () => (
  <Wrap id="top">
    <Container>
      <Status>
        <Dot />
        {profile.availability} · {profile.location}
      </Status>

      <Name>{profile.name}</Name>
      <Role>{profile.role}</Role>
      <Pitch>{profile.pitch}</Pitch>

      <Actions>
        <ButtonLink href="#work" variant="primary">
          View work
        </ButtonLink>
        <ButtonLink
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          Résumé (PDF)
        </ButtonLink>
      </Actions>

      <HeroSocials />
    </Container>
  </Wrap>
);

const Wrap = styled.section`
  padding: ${(props) => props.theme.spacing.xxxl} 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.xxl} 0;
  }
`;

const Status = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #3fbf6b;
  box-shadow: 0 0 0 4px rgba(63, 191, 107, 0.18);
`;

const Name = styled.h1`
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 400;
  font-size: clamp(3rem, 1.6rem + 7vw, 6.5rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
`;

const Role = styled.p`
  font-family: ${(props) => props.theme.fonts.display};
  font-style: italic;
  font-size: clamp(1.4rem, 1rem + 2vw, 2.4rem);
  color: ${(props) => props.theme.colors.textMuted};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

const Pitch = styled.p`
  max-width: 34ch;
  font-size: clamp(1.05rem, 1rem + 0.6vw, 1.35rem);
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

const HeroSocials = styled(SocialLinks)`
  margin-top: ${(props) => props.theme.spacing.xl};
`;
