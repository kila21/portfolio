import { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { scrollReveal } from "../../styles/scrollReveal";

export const Section = (props: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <SectionEl
      id={props.id}
      ref={ref}
      aria-labelledby={`${props.id}-heading`}
      $visible={isVisible}
    >
      <Container>
        <Head>
          <Kicker>{props.kicker}</Kicker>
          <Title id={`${props.id}-heading`}>{props.title}</Title>
        </Head>
        {props.children}
      </Container>
    </SectionEl>
  );
};

const SectionEl = styled.section<{ $visible?: boolean }>`
  padding: ${(props) => props.theme.spacing.xxxl} 0;
  scroll-margin-top: 96px;
  border-top: 1px solid ${(props) => props.theme.colors.line};
  ${scrollReveal}

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.xxl} 0;
  }
`;

const Head = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const Kicker = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent};
`;

const Title = styled.h2`
  font-size: clamp(2rem, 1.4rem + 3vw, 3.25rem);
`;
