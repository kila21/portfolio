import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.spacing.md};
  }
`;
