import styled from "styled-components";

export const ServicesSection = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: black;
  color: white;
  margin: 0;
  padding-left: 4em;
  font-size: 16px;
  padding-bottom: 15%;

  @media (max-width: 768px) {
    padding-left: 4em;
    font-size: 5px;
  }
`;
export const ServicesSub = styled.h4`
  color: #2bff88;
  font-size: 1.25em;
  margin: 0;
  font-weight: 300;
  @media screen {
   font-size: 4em;
  }
`;

export const ServicesTitle = styled.h1`
  margin: 0;
  font-size: 5em;
  position: relative;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 10em;
  }
`;
export const ServicesText = styled.p`
  font-size: 2.5em;
  max-width: 90%;
  font-weight: 300;
  text-justify: justify;
  @media (max-width: 768px) {
    font-size: 5em;
    text-justify: justify;
  }
`;

export const CanvasContain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
  text-align: center;
  justify-content: center;
`;
