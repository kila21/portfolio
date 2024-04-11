import { useEffect, useState } from "react";
import styled from "styled-components";

export const FullProjectsItem = (props: {
  date: number;
  project: string;
  link: string;
  tools: string[];
}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = () => {
    if (screenSize < 600) {
      window.open(props.link, "_blank");
    }
  };

  return (
    <FullProjectsItemStyled onClick={handleClick}>
      <FullProjectsDate>{props.date}</FullProjectsDate>
      <FullProjectsProject>{props.project}</FullProjectsProject>
      {screenSize >= 1024 && (
        <FullProjectsTools>
          {props.tools &&
            props.tools.map((item, index) => (
              <FullProjectsToolsItem key={index + item}>
                {item}
              </FullProjectsToolsItem>
            ))}
        </FullProjectsTools>
      )}

      {screenSize >= 600 && (
        <FullProjectsLink target="_blank" href={props.link}>
          {props.link}
        </FullProjectsLink>
      )}
    </FullProjectsItemStyled>
  );
};

const FullProjectsItemStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  min-height: 70px;
  width: 90%;
`;

const FullProjectsDate = styled.div`
  color: ${(props) => props.theme.colors.grey};
  margin-right: 50px;
`;

const FullProjectsProject = styled.div`
  color: ${(props) => props.theme.colors.white};
  max-width: 150px;
  min-width: 150px;
  margin-right: 50px;
  font-size: 20px;
`;

const FullProjectsLink = styled.a`
  color: ${(props) => props.theme.colors.grey};
  outline: none;
  text-decoration: none;
  font-size: 18px;
`;

const FullProjectsTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.turquoise};
  min-width: 400px;
  max-width: 400px;
`;

const FullProjectsToolsItem = styled.div`
  min-width: 30px;
  margin-right: 20px;

  font-size: 18px;
  text-transform: capitalize;
`;
