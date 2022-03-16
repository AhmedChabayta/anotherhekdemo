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
  font-size: 2em;
  color: #2bff88;
  margin-bottom: 0;
  font-weight: 300;
`;
export const PackagesTitle = styled.h1`
  font-size: 6em;
  font-weight: 400;
  margin-top: 0;
`;
export const PackagesText = styled.p`
  margin-top: 1em;
  font-size: 4em;
  font-weight: 300;
`;
export const Modules = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: center;
  align-items: center;
  margin: auto auto;
`;
