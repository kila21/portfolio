import { FormEvent, useState } from "react";
import styled from "styled-components";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { SocialLinks } from "../common/SocialLinks";
import { profile } from "../../data/profile";

type Status = "idle" | "submitting" | "success" | "error";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ACCESS_KEY) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return; // honeypot tripped

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${data.name || "someone"}`,
          from_name: "Portfolio contact form",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please email me instead.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email me instead.");
    }
  };

  return (
    <Section id="contact" kicker="04 / Contact" title="Let's work together">
      <Layout>
        <Intro>
          <p>
            I'm {profile.availability.toLowerCase()} and happy to talk about
            roles, freelance work, or a project you're stuck on.
          </p>
          <Direct href={`mailto:${profile.email}`}>{profile.email}</Direct>
          <SocialLinks />
        </Intro>

        {ACCESS_KEY ? (
          status === "success" ? (
            <Notice role="status">
              Thanks — your message is on its way. I'll reply soon.
            </Notice>
          ) : (
            <Form onSubmit={onSubmit} noValidate>
              <Field>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </Field>
              <Field>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </Field>
              <Field>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
              </Field>

              <Honeypot>
                <label htmlFor="botcheck">Leave this field empty</label>
                <input id="botcheck" name="botcheck" type="checkbox" tabIndex={-1} />
              </Honeypot>

              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>

              {status === "error" && (
                <ErrorText role="alert">{error}</ErrorText>
              )}
            </Form>
          )
        ) : (
          <Notice>
            The contact form isn't configured yet. Reach me at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </Notice>
        )}
      </Layout>
    </Section>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: ${(props) => props.theme.spacing.xxl};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.textMuted};
`;

const Direct = styled.a`
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  align-self: flex-start;
  transition: border-color ${(props) => props.theme.transitions.base};

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};

  label {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${(props) => props.theme.colors.textMuted};
  }

  input,
  textarea {
    font: inherit;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.bgElevated};
    border: 1px solid ${(props) => props.theme.colors.line};
    border-radius: ${(props) => props.theme.radii.sm};
    padding: 11px 13px;
    resize: vertical;
    transition: border-color ${(props) => props.theme.transitions.base};

    &:focus-visible {
      border-color: ${(props) => props.theme.colors.accent};
      outline-offset: 1px;
    }
  }
`;

const Honeypot = styled.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Notice = styled.p`
  align-self: start;
  padding: ${(props) => props.theme.spacing.lg};
  border: 1px solid ${(props) => props.theme.colors.line};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};

  a {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const ErrorText = styled.p`
  color: #d64545;
  font-size: 0.95rem;
`;
