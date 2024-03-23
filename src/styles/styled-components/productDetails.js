import styled from "styled-components";

export const ProductDetailsBackBtn = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  cursor: pointer;
  position: sticky;
  top: 10vh;
  &:hover {
    font-weight: bold;
    text-decoration: underline;
    color: #3038d1;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const PriceAndRatingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  span {
    font-size: larger;
    font-weight: bold;
  }
`;
