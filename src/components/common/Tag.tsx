import styled from "styled-components";

export const Tag = (props: { text: string }) => {
  return <TagStyled>{props.text}</TagStyled>;
};

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.xs};
  list-style: none;
`;

const TagStyled = styled.li`
  padding: 4px 11px;
  border-radius: ${(props) => props.theme.radii.pill};
  border: 1px solid ${(props) => props.theme.colors.line};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12.5px;
  color: ${(props) => props.theme.colors.textMuted};
  white-space: nowrap;
`;
