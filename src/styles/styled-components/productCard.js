import styled from "styled-components";

export const ProductCardContainer = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

export const ProductCardTitle = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 16px 0px 8px 0;
  font-weight: bold;
  width: 90%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductImageContainer = styled.img`
  width: ${({ theme }) => theme.imgWidth || "250px"};
  height: ${({ theme }) => theme.imgHeight || "250px"};
  object-fit: contain;
`;

export const ProductCardPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  span: nth-child(2) {
    display: block;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 10px;
  }

  span: nth-child(2): hover {
    color: #346ee3;
    font-weight: bold;
  }
`;
