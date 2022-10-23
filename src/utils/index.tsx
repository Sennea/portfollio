import styled from "styled-components";
import Contact from "../components/Contact";
import ExpandableSection from "../components/ExpandableSection";
import { data } from "../data";

export enum PossibleContent {
  "home" = "HOME",
  "experience" = "EXPERIENCE",
  "interests" = "INTERESTS",
  "contact" = "CONTACT",
  "technologies" = "TECHNOLOGIES",
}

const AboutWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  right: 2%;
  padding: 10px;
  max-width: 46%;
  text-align: right;
`;

export const pickContent = (activeItem: PossibleContent) => {
  switch (activeItem) {
    case PossibleContent.home:
    default: {
      return (
        <AboutWrapper>
          <p>{data.description}</p>
        </AboutWrapper>
      );
    }
    case PossibleContent.experience: {
      return <ExpandableSection items={data.experience} />;
    }
    case PossibleContent.contact: {
      return <Contact items={data.contact} />;
    }
    case PossibleContent.technologies: {
      return (
        <ExpandableSection
          items={data.technologies}
        />
      );
    }
    case PossibleContent.interests: {
      return <ExpandableSection items={data.interests} />;
    }
  }
};
