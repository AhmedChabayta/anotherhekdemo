import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import styled from "styled-components";

export default function CanvasBox(props) {
  return (
    <OuterContainer>
        <CardContainer>
          <Canvas>
            <Box color={props.color} />
          </Canvas>
          <TextContainer>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
          </TextContainer>
        </CardContainer>
    </OuterContainer>
  );
}
const OuterContainer = styled.div`
  display: block;
  width: 800px;
  font-size: 16px;
  margin: 0 auto;
  padding-bottom: 5em;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
const CardContainer = styled.div`
  justify-content: center;
  text-align: center;
  width:100%;
  
`;
const TextContainer = styled.div`
  margin: 0 1em;
  text-align: center;
  justify-self: center;
  max-width: 100%;
  color: white;
  text-align: center;
  text-justify: justify;
`;
const CardTitle = styled.h3`
  font-size: 5em;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 8em;
  }
`;
const CardText = styled.p`
  font-size: 1.875em;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 6em;
  }
`;
