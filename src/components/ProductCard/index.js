import React, { useContext } from "react";
import {
  ProductCardContainer,
  ProductCardPriceContainer,
  ProductCardTitle,
  ProductImageContainer,
} from "../../styles/styled-components/productCard";
import { useNavigate } from "react-router-dom";
import { ProductDataContext } from "../../contexts/ProductDataContext";

const ProductCard = ({ cardData }) => {
  const { handleProductDetails } = useContext(ProductDataContext);

  const navigate = useNavigate();

  return (
    <ProductCardContainer data-testid="product-card">
      <ProductImageContainer src={cardData?.image} alt={cardData?.title} />
      <ProductCardTitle>{cardData?.title}</ProductCardTitle>
      <ProductCardPriceContainer>
        <span>Price: ₹ {cardData?.price}</span>
        <span
          onClick={() => {
            handleProductDetails(cardData);
            navigate(`/product/${cardData.id}`);
          }}
        >
          View Details
        </span>
      </ProductCardPriceContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
