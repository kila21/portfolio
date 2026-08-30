import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProjectEntry } from "../../data/projects";

/** Floating screenshot that trails the cursor while a project row is hovered. */
export const ProjectPreview = ({
  project,
}: {
  project: ProjectEntry | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<ProjectEntry | null>(null);

  useEffect(() => {
    if (project) setShown(project);
  }, [project]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX + 24}px, ${
          e.clientY - 120
        }px)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const image = shown?.image;

  return (
    <Floating
      ref={ref}
      data-visible={Boolean(project && image)}
      aria-hidden="true"
    >
      {image && <img src={image} alt="" loading="eager" decoding="async" />}
    </Floating>
  );
};

const Floating = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.z.preview};
  width: 340px;
  aspect-ratio: 16 / 10;
  border-radius: ${(props) => props.theme.radii.md};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.line};
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  opacity: 0;
  scale: 0.92;
  transition:
    opacity ${(props) => props.theme.transitions.base},
    scale ${(props) => props.theme.transitions.base};

  &[data-visible="true"] {
    opacity: 1;
    scale: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
