import React from "react";
import styled from "styled-components";

interface ThemePickerProps {
  onClick: () => void;
  mode: string;
}

const Wrapper = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  text-align: left;
  cursor: pointer;
  color: ${(props) => props.theme.accent};
`;

const ThemePicker: React.FC<ThemePickerProps> = ({ onClick, mode }) => (
  <Wrapper onClick={onClick}>
    {mode === "dark" ? `Light Mode` : `Dark Mode`}
  </Wrapper>
);

export default ThemePicker;
