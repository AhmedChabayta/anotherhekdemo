import styled from "styled-components";

export const PackagesSection = styled.div`
  background-color: black;
  color: white;
  font-size: 16px;
  position: relative;
  padding: 4em;
  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
export const PackagesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PackagesSubtitle = styled.h4`
  font-size: 1.25em;
  color: #2bff88;
  margin-bottom: 0;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;
export const PackagesTitle = styled.h1`
  font-size: 5em;
  font-weight: 400;
  margin: 0;
  @media (max-width: 768px) {
    font-size:10em
  }
`;
export const PackagesText = styled.p`
  font-size: 2.5em;
  font-weight: 300;
  margin-bottom: 5vh;
  @media (max-width: 768px) {
    font-size:5em;
  }
`;
export const Modules = styled.div`
  display: flex;
  flex-wrap: wrap;
`