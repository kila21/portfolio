import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/common/Container";
import { Tag, TagList } from "../components/common/Tag";
import { SubNav } from "../components/Nav/SubNav";
import { Footer } from "../components/Footer/Footer";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export const AllProjects = () => {
  useDocumentMeta({
    title: `Projects — ${profile.name}`,
    description: `Every project by ${profile.name} — web apps built with React, TypeScript, Next.js and more.`,
    path: "/projects",
  });

  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
      <SubNav />
      <Main>
        <Container>
          <Title>All projects</Title>

          <Grid>
            {sorted.map((project) => (
              <Card key={project.id} to={`/projects/${project.id}`}>
                <Media>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Placeholder aria-hidden="true">
                      {project.title.slice(0, 1)}
                    </Placeholder>
                  )}
                </Media>
                <CardBody>
                  <CardHead>
                    <h2>{project.title}</h2>
                    <span>{project.year}</span>
                  </CardHead>
                  <p>{project.description}</p>
                  <TagList>
                    {project.tools.slice(0, 4).map((tool) => (
                      <Tag key={tool} text={tool} />
                    ))}
                  </TagList>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  padding: ${(props) => props.theme.spacing.xxl} 0;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 1.6rem + 4vw, 4.5rem);
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.line};
  border-radius: ${(props) => props.theme.radii.lg};
  overflow: hidden;
  transition:
    transform ${(props) => props.theme.transitions.base},
    border-color ${(props) => props.theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const Media = styled.div`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.surface};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.textMuted};
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.lg};
  flex: 1;

  p {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 0.95rem;
    flex: 1;
  }
`;

const CardHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.md};

  h2 {
    font-size: 1.35rem;
  }
  span {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 12px;
    color: ${(props) => props.theme.colors.textMuted};
  }
`;
