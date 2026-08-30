import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/common/Container";
import { Tag, TagList } from "../components/common/Tag";
import { ButtonLink } from "../components/common/Button";
import { SubNav } from "../components/Nav/SubNav";
import { Footer } from "../components/Footer/Footer";
import { NotFound } from "./NotFound";
import { getProject, projects } from "../data/projects";
import { profile } from "../data/profile";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export const ProjectDetail = () => {
  const { id = "" } = useParams();
  const project = getProject(id);

  useDocumentMeta({
    title: project
      ? `${project.title} — ${profile.name}`
      : `Not found — ${profile.name}`,
    description: project?.description,
    path: `/projects/${id}`,
  });

  if (!project) return <NotFound />;

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <SubNav />
      <main>
        <Container>
          <Back to="/#work">← All work</Back>

        <Header>
          <h1>{project.title}</h1>
          <Facts>
            <span>{project.year}</span>
            {project.role && <span>{project.role}</span>}
          </Facts>
          <Links>
            {project.liveLink && (
              <ButtonLink
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
              </ButtonLink>
            )}
            {project.repoLink && (
              <ButtonLink
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Repository
              </ButtonLink>
            )}
          </Links>
        </Header>

        {project.image && (
          <Shot>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              decoding="async"
            />
          </Shot>
        )}

        <Body>
          {project.problem && (
            <Block>
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </Block>
          )}

          {project.contributions && project.contributions.length > 0 && (
            <Block>
              <h2>What I did</h2>
              <DidList>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </DidList>
            </Block>
          )}

          {project.outcome && (
            <Block>
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </Block>
          )}

          <Block>
            <h2>Stack</h2>
            <TagList>
              {project.tools.map((tool) => (
                <Tag key={tool} text={tool} />
              ))}
            </TagList>
          </Block>
        </Body>

        <More>
          <h2>More work</h2>
          <ul>
            {others.map((p) => (
              <li key={p.id}>
                <Link to={`/projects/${p.id}`}>
                  {p.title} <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </More>
        </Container>
      </main>
      <Footer />
    </>
  );
};

const Back = styled(Link)`
  display: inline-block;
  margin: ${(props) => props.theme.spacing.xl} 0;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 14px;
  color: ${(props) => props.theme.colors.textMuted};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};

  h1 {
    font-size: clamp(2.5rem, 1.6rem + 4vw, 4.5rem);
    font-weight: 400;
  }
`;

const Facts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  color: ${(props) => props.theme.colors.textMuted};
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

const Shot = styled.div`
  margin: ${(props) => props.theme.spacing.xxl} 0;
  border-radius: ${(props) => props.theme.radii.lg};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.line};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  max-width: ${(props) => props.theme.layout.prose};
`;

const Block = styled.section`
  h2 {
    font-size: 1.5rem;
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }
  p {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const DidList = styled.ul`
  padding-left: 1.1em;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.textMuted};
`;

const More = styled.section`
  margin: ${(props) => props.theme.spacing.xxxl} 0
    ${(props) => props.theme.spacing.xxl};
  padding-top: ${(props) => props.theme.spacing.xl};
  border-top: 1px solid ${(props) => props.theme.colors.line};

  h2 {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.colors.textMuted};
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.sm};
  }
  a {
    font-family: ${(props) => props.theme.fonts.display};
    font-size: 1.5rem;
  }
  a:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
