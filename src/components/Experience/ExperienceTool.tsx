import styled from "styled-components";

export const ExperienceTool = (props: { text: string }) => {
  return <ExperienceToolStyled>{props.text}</ExperienceToolStyled>;
};

const ExperienceToolStyled = styled.div`
  min-width: 50px;
  padding: 0 10px;
  border-radius: 30px;
  min-height: 30px;
  font-size: 17px;
  background-color: rgb(38 166 154 / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 20px;
  color: rgb(94 234 212/1);
`;
