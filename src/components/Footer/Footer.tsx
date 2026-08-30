import styled from "styled-components";
import { Container } from "../common/Container";
import { profile } from "../../data/profile";

export const Footer = () => (
  <Wrap>
    <Container>
      <Inner>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Built with React, TypeScript &amp; styled-components ·{" "}
          <a
            href="https://github.com/kila21/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </span>
        <a href="#top">Back to top ↑</a>
      </Inner>
    </Container>
  </Wrap>
);

const Wrap = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.line};
  padding: ${(props) => props.theme.spacing.xl} 0;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.lg};
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12.5px;
  color: ${(props) => props.theme.colors.textMuted};

  a:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
