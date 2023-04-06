import styled from "styled-components";

export const StyledCardUser = styled.section`
  width: 100%;
  height: 130px;
  border-top: 1px solid #868e96;
  border-bottom: 1px solid #868e96;

  .card {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    gap: 10px;

    h1 {
      font-size: 1.125rem;
      font-weight: 700;
      color: #f8f9fa;
    }
    h3 {
      font-size: 0.75rem;
      font-weight: 600;
      color: #868e96;
    }

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;

      align-items: center;
    }
  }
`;
