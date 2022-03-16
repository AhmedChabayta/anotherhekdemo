import styled from "styled-components";

export const ServicesSection = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: black;
  color: white;
  margin: 0;
  padding-left: 4em;
  font-size: 16px;

  @media (max-width: 768px) {
    padding-left: 4em;
    font-size: 6px;
  }
`;
export const ServicesSub = styled.h4`
  color: #2bff88;
  font-size: 2em;
  margin-bottom: 0;
  font-weight: 300;
`;

export const ServicesTitle = styled.h1`
  margin-top: 0;
  font-size: 6em;
  position: relative;
  font-weight: 400;
`;
export const ServicesText = styled.p`
  font-size: 4em;
  max-width: 90%;
  font-weight: 300;
`;

export const CanvasContain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
  text-align: center;
  justify-content: center;
`;
