import styled from "styled-components";

export const ExperienceItem = () => {
  return (
    <ExperienceItemStyled>
      <ExperienceItemDate>2014 - 2020</ExperienceItemDate>
      <ExperienceItemContent>
        <ExperienceItemTitle>
          Senior Frontend Engineer, Accessibility ·
        </ExperienceItemTitle>

        <ExperienceItemText>
          Build and maintain critical components used to construct Klaviyo’s
          frontend, across the whole product. Work closely with cross-functional
          teams, including developers, designers, and product managers, to
          implement and advocate for best practices in web accessibility.
        </ExperienceItemText>
      </ExperienceItemContent>
    </ExperienceItemStyled>
  );
};

const ExperienceItemStyled = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ExperienceItemDate = styled.div`
  color: ${(props) => props.theme.colors.grey};
  width: 35%;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const ExperienceItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceItemTitle = styled.h4`
  color: ${(props) => props.theme.colors.white};
`;

const ExperienceItemText = styled.p`
  color: ${(props) => props.theme.colors.grey};
  margin-top: 15px;
`;
