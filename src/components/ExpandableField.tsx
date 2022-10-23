import React from "react";
import styled, { keyframes } from "styled-components";
import Expand from "react-expand-animated";
import ArrowDown from "../assets/ArrowDown";

interface ExpandableFieldProps {
  startDate?: string;
  endDate?: string;
  title: string;
  subtitle?: string;
  description?: string;
  onItemClick: () => void;
  active: boolean;
}

const ExpandableFieldWrapper = styled.div<{ expandable: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${(props) => (props.expandable ? "pointer" : "initial")};
  margin: 10px 0 0;
  text-align: right;
`;

const Title = styled.h3`
  margin: 0;
`;

const Subtitle = styled.h5`
  margin: 3px 0;
  color: ${(props) => props.theme.accent};
`;

const expand = keyframes`
  from {
    max-height: 0px;
  }

  to {
    max-height: 100%;
  }
`;

const Date = styled.span`
  color: ${(props) => props.theme.accent};
  font-style: italic;
  font-size: 0.7em;
  animation: ${expand} 4s ease-in;
`;

const Description = styled.span``;

const Arrow = styled(ArrowDown)`
  max-width: 20px;
  max-height: 20px;
`;

const WrapperRow = styled.div`
  fill: ${(props) => props.theme.main};
  display: flex;
  flex-direction: row;
  text-align: right;
  justify-content: right;
`;

const ExpandableField: React.FC<ExpandableFieldProps> = ({
  startDate,
  endDate,
  title,
  subtitle,
  description,
  onItemClick,
  active,
}) => {
  const handleClick = () => {
    description && onItemClick();
  };

  return (
    <ExpandableFieldWrapper expandable={!!description} onClick={handleClick}>
      <WrapperRow>
        <Title>{title}</Title>
        {description && <Arrow />}
      </WrapperRow>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {startDate && <Date>{`(${startDate} - ${endDate})`}</Date>}
      <Expand
        open={active && !!description}
        duration={1000}
        transitions={["height", "opacity"]}
      >
        <Description>{description}</Description>
      </Expand>
    </ExpandableFieldWrapper>
  );
};

export default ExpandableField;
