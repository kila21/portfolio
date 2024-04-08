import styled from "styled-components";

export const ProjectsItem = (props: {
  title: string;
  text: string;
  img: string;
  liveLink: string;
  repoLink: string;
}) => {
  return (
    <ProjectsItemStyled>
      <ProjectsItemImage src={props.img} alt="live repository link image" />
      <ProjectsItemContent>
        <ProjectsItemTitle>{props.title}</ProjectsItemTitle>
        <ProjectsItemText>{props.text}</ProjectsItemText>

        <ProjectLinksContainer>
          <ProjectLinks target="_blank" href={props.liveLink}>
            Live
          </ProjectLinks>
          <ProjectLinks target="_blank" href={props.repoLink}>
            Repository
          </ProjectLinks>
        </ProjectLinksContainer>
      </ProjectsItemContent>
    </ProjectsItemStyled>
  );
};

const ProjectsItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: rgba(30, 41, 59, 0.5);
      border-radius: 10px;
    }
  }
`;

const ProjectsItemImage = styled.img`
  min-width: 170px;
  height: 95px;
  cursor: pointer;

  @media (min-width: 1024px) {
    margin: 10px;
  }
`;

const ProjectsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 700px) {
    margin-left: 30px;
  }
`;

const ProjectsItemTitle = styled.h4`
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
`;

const ProjectsItemText = styled.p`
  color: ${(props) => props.theme.colors.grey};
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  min-width: 150px;
`;
const ProjectLinks = styled.a`
  color: ${(props) => props.theme.colors.turquoise};
  margin-right: 15px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;
