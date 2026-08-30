import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { Work } from "./components/Work/Work";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { SkipLink } from "./components/common/SkipLink";
import { profile } from "./data/profile";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

function App() {
  const { hash } = useLocation();

  useDocumentMeta({
    title: `${profile.name} — ${profile.role}`,
    description: profile.pitch,
    path: "/",
  });

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [hash]);

  return (
    <>
      <SkipLink href="#main">Skip to content</SkipLink>
      <Nav />
      <Main id="main">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;

const Main = styled.main`
  display: block;
`;
