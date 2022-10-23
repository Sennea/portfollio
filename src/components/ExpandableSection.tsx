import React from "react";
import styled from "styled-components";
import ExpandableField from "./ExpandableField";
import { useWindowSize } from "../hooks/useWindowSize";

interface ExpandableSectionProps {
  items: {
    startDate?: string;
    endDate?: string;
    title: string;
    subtitle?: string;
    description?: string;
  }[];
}

const SectionWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  right: 2%;
  padding: 10px;
  max-width: 46%;
`;

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ items }) => {
  const [itemsActive, setItemsActive] = React.useState<Array<number>>([]);
  const { width } = useWindowSize();
  const maximumItems = width < 560 ? 1 : 2;

  const onItemClick = (index: number) => () => {
    const exists = itemsActive.indexOf(index);
    const nItems = itemsActive;
    if (exists > -1) {
      nItems.splice(exists, 1);
      return setItemsActive([...nItems]);
    }
    if (itemsActive.length > maximumItems - 1) {
      nItems.shift();
      nItems.push(index);
      return setItemsActive([...nItems]);
    } else {
      nItems.push(index);
      return setItemsActive([...nItems]);
    }
  };

  return (
    <SectionWrapper>
      {items.map((item, i) => (
        <ExpandableField
          key={i}
          {...item}
          onItemClick={onItemClick(i)}
          active={itemsActive.some((active) => active === i)}
        />
      ))}
    </SectionWrapper>
  );
};

export default ExpandableSection;
