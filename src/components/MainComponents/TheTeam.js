import React from "react";
import styled from "styled-components";

export default function TheTeam(member) {
  return (
    <Card>
      <ImageContainer>
        <img src={`/${member.img}.png`} alt='' />
      </ImageContainer>
      <TextContainer>
        <Title>{member.title}</Title>
        <Name>{member.name}</Name>
        <Description>{member.description}</Description>
      </TextContainer>
    </Card>
  );
}
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  width: 800px;
  font-size: 16px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
const ImageContainer = styled.div`
position: relative;
display: flex;

`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
  align-items: center;
`;
const Title = styled.h4`
  font-size: 1.5625em;
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;
const Name = styled.h3`
  font-size: 2.8125em;
  font-weight: 300;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 6em;
  }
`;
const Description = styled.p`
  font-size: 1.875em;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;
