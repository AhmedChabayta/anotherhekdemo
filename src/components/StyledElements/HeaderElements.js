import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  padding-left: 4em;
  overflow-x: hidden;
  background-color: black;
  color: white;
  min-height: 100vh;
  font-size: 16px;
  padding-bottom: 4em;
  @media (max-width: 768px) {
    padding-left: 3em;
    font-size: 5px;
  }
`;
export const HeaderTitle = styled.h1`
font-weight:400;
  font-size: 6.25em;
  text-justify: auto;
  @media (max-width: 768px) {
    font-size:10em;
  }
`;
export const HeaderText = styled.p`
  font-size: 2.5em;
  text-justify: justify;
  max-width:90%;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 6em;
    text-justify: justify;
  }
`;
export const SupportContainer = styled.div`
  display: flex;
  max-width: 70%;
  cursor: pointer;
  @media (max-width: 768px) {
    bottom: 10em;
  }
`;
export const SupportText = styled.p`
  font-size: 3vw;
  color: #2BFF88;
  border-bottom: 1px solid #2BFF88;
`;
