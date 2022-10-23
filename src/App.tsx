import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { data } from "./data";
import Lines from "./components/Lines";
import ThemePicker from "./components/ThemePicker";
import { theme } from "./components/Theme";
import { pickContent, PossibleContent } from "./utils";

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.main};
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2%;
  left: 2%;
  text-align: left;
`;

const Text = styled.h3`
  margin: 3px 0px;
  cursor: pointer;
  font-size: 1em;
  font-weight: normal;

  &:hover {
    font-weight: bold;
  }
`;

const Name = styled.h1`
  font-size: 2.2em;
  margin: 0;
`;

const ShortName = styled.h2`
  font-size: 1.2em;
  margin: 5px 0 15px;
  color: ${(props) => props.theme.accent};
`;

function App() {
  const [activeItem, setActive] = React.useState(PossibleContent.home);
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const onThemeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme[mode]}>
      <Wrapper>
        <Lines />
        <Header>
          <Name>{data.name}</Name>
          <ShortName>{data.shortName}</ShortName>
          <Text onClick={() => setActive(PossibleContent.home)}>About me</Text>
          <Text onClick={() => setActive(PossibleContent.experience)}>
            Experience
          </Text>
          <Text onClick={() => setActive(PossibleContent.contact)}>
            Contact
          </Text>
          <Text onClick={() => setActive(PossibleContent.technologies)}>
            My technologies
          </Text>
          <Text onClick={() => setActive(PossibleContent.interests)}>
            My interests
          </Text>
        </Header>
        {pickContent(activeItem)}
        <ThemePicker onClick={onThemeChange} mode={mode} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
