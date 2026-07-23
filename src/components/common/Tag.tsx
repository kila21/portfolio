import styled from "styled-components";

export const Tag = (props: { text: string }) => {
  return <TagStyled>{props.text}</TagStyled>;
};

const TagStyled = styled.div`
  min-width: 50px;
  padding: 0 10px;
  border-radius: ${(props) => props.theme.radii.pill};
  min-height: 30px;
  font-size: 15px;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.colors.accent.turquoiseMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.accent.turquoise};
`;
