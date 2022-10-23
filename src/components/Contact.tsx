import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/Github";
import LinkedinIcon from "../assets/Linkedin";
import PhoneIcon from "../assets/Phone";
import MailIcon from "../assets/Mail";

interface ContactProps {
  items: {
    type: "linkedin" | "github" | "phone" | "mail";
    link?: string;
    text?: string;
  }[];
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 10px 0 0;
  text-align: right;
  color: ${(props) => props.theme.main};
`;

const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  fill: ${(props) => props.theme.main};
`;

const RowWrapper = styled.div<{ expandable: boolean }>`
  display: flex;
  justify-content: right;
  cursor: ${(props) => (props.expandable ? "pointer" : "initial")};
  margin-top: 10px;
  cursor: ;
  position: relative;
  &:hover {
    font-weight: ${(props) => (props.expandable ? "bold" : "")};
  }
`;

const SectionWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  right: 2%;
  padding: 10px;
  max-width: 48%;
`;

const LinkWrapper = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const renderContactPart = (
  text: string = "",
  icon: React.ReactNode,
  index: number,
  link?: string
) => (
  <RowWrapper expandable={!!link} key={index}>
    {link && <LinkWrapper href={link} target="_blank" />}
    <IconWrapper>{icon}</IconWrapper>
    <span>{text}</span>
  </RowWrapper>
);

const pickIcon = (type: ContactProps["items"][0]["type"]) => {
  switch (type) {
    case "linkedin":
      return <LinkedinIcon />;
    case "github":
      return <GithubIcon />;
    case "phone":
      return <PhoneIcon />;
    case "mail":
      return <MailIcon />;
  }
};

const renderContactItem = (item: ContactProps["items"][0], index: number) => {
  return renderContactPart(item.text, pickIcon(item.type), index, item.link);
};

const Contact: React.FC<ContactProps> = ({ items }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <SectionWrapper>
      <ContactWrapper onClick={() => setIsActive(!isActive)}>
        {items.map((item, i) => renderContactItem(item, i))}
      </ContactWrapper>
    </SectionWrapper>
  );
};

export default Contact;
