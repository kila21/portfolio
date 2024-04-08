import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <MainContentStyled>
        <About />
        <Experience />
      </MainContentStyled>
    </>
  );
}

export default App;

const MainContentStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
