import React from "react";
import styled from "styled-components";

export default function TheTeam(member) {
  return (
    <Card>
      <ImageContainer>
        <img src={`/${member.img}.png`} alt='' />
      </ImageContainer>
      <TextContainer>
        <Subtitle>{member.name}</Subtitle>
        <Title>{member.title}</Title>
        <Description>{member.description}</Description>
      </TextContainer>
    </Card>
  );
}
const Card = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  font-size: 16px;
  max-width: 100%;
  width: 800px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
const ImageContainer = styled.div`

`
const TextContainer = styled.div`
  text-align: center;
`;
const Subtitle = styled.h3`
  font-size: 4em;
  font-weight: 300;
  margin-bottom: 0;
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 6em;
  font-weight: 400;
`;
const Description = styled.p`
  font-size: 4em;
`;
