import styled from "styled-components";
import { profile } from "../../data/profile";

const icons: Record<string, JSX.Element> = {
  GitHub: (
    <path
      fill="currentColor"
      d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.75c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.1 1.62 1.1.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.34.1-2.8 0 0 .89-.28 2.9 1.08a10 10 0 0 1 5.28 0c2.01-1.36 2.9-1.08 2.9-1.08.57 1.46.21 2.53.1 2.8.68.74 1.09 1.68 1.09 2.83 0 4.04-2.46 4.93-4.8 5.19.38.33.72.98.72 1.98v2.93c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z"
    />
  ),
  LinkedIn: (
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
    />
  ),
  Email: (
    <path
      fill="currentColor"
      d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.9L19.8 6H4.2ZM20 7.7l-7.4 5.6a1 1 0 0 1-1.2 0L4 7.7V18h16V7.7Z"
    />
  ),
};

export const SocialLinks = ({ className }: { className?: string }) => (
  <List className={className}>
    {profile.socials.map((social) => (
      <li key={social.label}>
        <a
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={social.label}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {icons[social.label]}
          </svg>
        </a>
      </li>
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  list-style: none;

  a {
    display: inline-flex;
    color: ${(props) => props.theme.colors.textMuted};
    transition: color ${(props) => props.theme.transitions.base},
      transform ${(props) => props.theme.transitions.fast};
  }

  a:hover {
    color: ${(props) => props.theme.colors.accent};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    a:hover {
      transform: none;
    }
  }
`;
