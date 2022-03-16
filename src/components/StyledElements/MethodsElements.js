import styled from "styled-components";


export const MethodsSection = styled.div`
  display: flex;
  width: 100vw;
  background-color: white;
  min-height: 100vh;
  font-size: 16px;
  padding: 4em;
  @media (max-width: 768px) {
    font-size: 6px;
    flex-direction: column;
    align-content: center;
  }
`;
export const MethodTextContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MethodSubtitle = styled.h4`
  font-size: 2em;
  margin-bottom: 0;
  font-weight: 300;
`;
export const MethodTitle = styled.h1`
  margin-top: 0;
  font-size: 6em;
  font-weight: 400;
`;
export const MethodText = styled.p`
  font-size: 4em;
`;
export const MandalaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 50vw;
  margin-top: 5em;
`;
