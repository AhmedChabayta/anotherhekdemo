import styled from "styled-components";

export const TeamSection = styled.div`
  font-size: 16px;
  padding-left: 4em;

  @media (max-width: 768px) {
    font-size: 5px;
  }
`;
export const TeamTextContainer = styled.div`
  color: white;
`;
export const TeamSubtitle = styled.h4`
  font-size: 1.25em;
  color: #2bff88;
  margin-bottom: 0;
  font-weight: 300;
  @media screen {
   font-size: 4em;
  }
`;
export const TeamTitle = styled.h1`
  margin-top: 0;
  font-size: 5em;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size:10em;
  }
`;
export const TeamText = styled.p`
  font-size: 2.5em;
  margin-top: 1em;
  @media (max-width: 768px) {
    font-size:5em;
  }
`;
