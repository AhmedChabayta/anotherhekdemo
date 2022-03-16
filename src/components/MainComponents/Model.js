import React from "react";
import styled from "styled-components";

export default function Model(feature) {
  return (
    <Card>
      <img src={`./modelimages/${feature.img}.svg`} alt='' />
      <TextContainer>
        <Subtitle>{feature.subtitle}</Subtitle>
        <Title>{feature.title}</Title>
        <Description>{feature.description}</Description>
      </TextContainer>
    </Card>
  );
}
const Card = styled.div`
  display: flex;
  margin: 0 auto;
  font-size: 16px;
  max-width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Subtitle = styled.h3`
  font-size: 4em;
  font-weight: 300;
  margin-bottom: 0;
  justify-content: center;
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 6em;
  font-weight: 400;
  
`;
const Description = styled.p`
  font-size: 4em;
   margin-top: 0;
`;
