import styled from "styled-components";

export const ExperienceItem = (props: {
  date: string;
  title: string;
  text: string;
  tools: string[];
}) => {
  return (
    <ExperienceItemStyled>
      <ExperienceItemDate>{props.date}</ExperienceItemDate>
      <ExperienceItemContent>
        <ExperienceItemTitle>{props.title}</ExperienceItemTitle>

        <ExperienceItemText>{props.text}</ExperienceItemText>
      </ExperienceItemContent>
    </ExperienceItemStyled>
  );
};

const ExperienceItemStyled = styled.div`
  display: flex;
  margin-top: 50px;
  min-height: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: rgba(30, 41, 59, 0.5);
      border-radius: 10px;
    }
  }
`;

const ExperienceItemDate = styled.div`
  color: ${(props) => props.theme.colors.grey};
  width: 35%;
  margin-right: 20px;
  padding: 10px 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const ExperienceItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ExperienceItemTitle = styled.h4`
  color: ${(props) => props.theme.colors.white};
`;

const ExperienceItemText = styled.p`
  color: ${(props) => props.theme.colors.grey};
  line-height: 1.7;
  margin-top: 15px;
  margin-bottom: 20px;
`;
