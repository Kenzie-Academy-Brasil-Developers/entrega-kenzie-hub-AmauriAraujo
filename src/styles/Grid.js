import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ containerWidth }) =>
    containerWidth ? containerWidth : 1400}px;
  margin: 0 auto;
  margin-top: ${({ marginContainerTop }) =>
    marginContainerTop ? marginContainerTop : 0}px;

  padding: 10px;
`;
