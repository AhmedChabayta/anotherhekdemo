import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  padding-left: 4em;
  overflow-x: hidden;
  background-color: black;
  color: white;
  min-height: 100vh;
  font-size: 16px;
  @media (max-width: 768px) {
    padding-left: 5em;
    font-size: 6px;
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 7.25em;
  text-justify: auto;
`;
export const HeaderText = styled.p`
  font-size: 4em;
  width: 90%;
  text-justify: auto;
`;
export const SupportContainer = styled.div`
  display: flex;
  max-width: 70%;
  cursor: pointer;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 10em;
  }
`;
export const SupportText = styled.p`
  font-size: 3vw;
  color: #2BFF88;
  border-bottom: 1px solid #2BFF88;
`;
