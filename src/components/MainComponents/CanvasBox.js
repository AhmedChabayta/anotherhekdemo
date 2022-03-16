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
  margin: 0 auto;
  text-align: center;
  justify-self: center;
  color: white;
  width: 100%;
  text-align: center;
`;
const CardTitle = styled.h3`
  font-size: 3em;
`;
const CardText = styled.p`
  font-size: 2.5em;
`;
