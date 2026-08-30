import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/common/Container";
import { ButtonLink } from "../components/common/Button";
import { profile } from "../data/profile";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export const NotFound = () => {
  useDocumentMeta({ title: `Page not found — ${profile.name}`, path: "/404" });

  return (
    <Wrap>
      <Container>
        <Code>404</Code>
        <h1>This page wandered off.</h1>
        <p>The link may be broken or the page may have moved.</p>
        <ButtonLink href="/">Back home</ButtonLink>
      </Container>
    </Wrap>
  );
};

/** Router errorElement — also catches render/loader errors, not just bad URLs. */
export const RouteError = () => {
  const error = useRouteError();
  console.error(error);
  return <NotFound />;
};

const Wrap = styled.main`
  padding: ${(props) => props.theme.spacing.xxxl} 0;

  h1 {
    font-size: clamp(2rem, 1.4rem + 3vw, 3.25rem);
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
  p {
    color: ${(props) => props.theme.colors.textMuted};
    margin-bottom: ${(props) => props.theme.spacing.xl};
  }
`;

const Code = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  color: ${(props) => props.theme.colors.accent};
  font-size: 14px;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;
