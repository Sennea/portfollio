import React from "react";
import styled, { keyframes } from "styled-components";

const drop = keyframes`
  from {
    top: -50%;
  }

  to {
    top: 110%;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: ${props => props.theme.accentBackground} ;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      ${props => props.theme.main} 75%,
      ${props => props.theme.main} 100%
    );
    animation: ${drop} 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(1) {
    margin-left: -25%;
    &:after {
      animation-delay: 2s;
    }
  }
  &:nth-child(3) {
    margin-left: 25%;
    &:after {
      animation-delay: 2.5s;
    }
  }
`;

const LinesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
`;

const Lines: React.FC<{}> = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <LinesWrapper>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </LinesWrapper>
  );
};

export default Lines;
