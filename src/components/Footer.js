import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <GreenContainer>
        <TextContainer>
          <FootText>
            Interested in collaborating or discussing future opportunities? Get in touch with us and
            we'll be happy to assist you.
          </FootText>
          <ContactButton>Get in touch</ContactButton>
        </TextContainer>
      </GreenContainer>
      <div style={{ width: "100%", backgroundColor: "black", height: "1em" }} />
      <PurpleContainer>
        <LogoContainer>
          <img src='/footerlogo.svg' alt='' />
          <Small> © 2020 HEK. All Rights Reserved.</Small>
        </LogoContainer>
        <Columns>
          <Column1>
            <li style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Site</li>
            <li>About</li>
            <li>Services</li>
            <li>Insights</li>
            <li>Contact</li>
          </Column1>
          <Column2>
            <li style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Resources</li>
            <li>On-baording</li>
            <li>Questionnaire</li>
            <li>Document #2</li>
            <li>Document #3</li>
          </Column2>
        </Columns>
      </PurpleContainer>
    </FooterSection>
  );
}
const FooterSection = styled.div`
  font-size: 16px;
  height: 50vh;
  position: relative;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
const GreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #2bff88;
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
  background-image: url(/dots-photo.svg);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  @media (max-width: 768px) {
    background-image: none;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FootText = styled.h2`
  font-size: 5em;
  font-weight: 400;
  margin-left: 3.7rem;
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 90%;
    margin-left: 2rem;
  }
`;
const ContactButton = styled.button`
  cursor: pointer;
  position: relative;
  height: 2em;
  width: 7em;
  padding: 0;
  font-size: 2em;
  border-radius: 15px;
  background-color: black;
  border: none;
  color: #2bff88;
  margin-left: 4rem;
  margin-bottom: 3em;
  @media (max-width: 768px) {
    margin-top: 10em;
    margin-left: 2rem;
  }
`;
const PurpleContainer = styled.div`
  position: relative;
  background-color: #b166ff;
  min-height: 50vh;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const LogoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  justify-content: center;
  > img {
    max-width: 300px;
    min-width: 150px;
    align-self: center;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    img {
      display: none;
      margin: auto;
    }
  }
`;
const Small = styled.small`
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  font-size: 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 60vw;
`;
const Columns = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  > li {
    list-style-type: none;
    margin: 1em;
    text-justify: left;
    text-align: justify;
  }
`;
const Column1 = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  font-size: 1rem;
  text-align: left;
  > li {
    list-style-type: none;
    margin: 1em;
    text-align: left;
  }
`;
const Column2 = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  > li {
    list-style-type: none;
    margin: 1em;
    text-align: left;
  }
`;
