import React, { useContext, useEffect, useState } from "react";
import { PageLayout } from "../../styles/styled-components/layout";
import { ProductDataContext } from "../../contexts/ProductDataContext";
import {
  PriceAndRatingsContainer,
  ProductDetailsBackBtn,
  ProductDetailsContainer,
} from "../../styles/styled-components/productDetails";
import { ProductImageContainer } from "../../styles/styled-components/productCard";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productData, setProductData] = useState();

  const { productDetails } = useContext(ProductDataContext);
  const { productId } = useParams();

  useEffect(() => {
    if (productDetails) setProductData(productDetails);
    else {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => setProductData(json));
    }
  }, [productDetails, productId]);

  const navigate = useNavigate();

  return (
    <PageLayout data-testid="product-details">
      <ProductDetailsBackBtn onClick={() => navigate(-1)}>
        ← Back To Catalog
      </ProductDetailsBackBtn>
      {productData && (
        <ProductDetailsContainer>
          <ProductImageContainer
            theme={{ imgWidth: "40vw", imgHeight: "60vh" }}
            src={productData.image}
            alt={productData.title}
          />
          <PriceAndRatingsContainer>
            <h3>{productData.description}</h3>
            <div>
              Ratings: {productData.rating.rate} ⭐ ({productData.rating.count})
            </div>
            <div>
              Price:
              <span> ₹ {productData.price}</span>
            </div>
          </PriceAndRatingsContainer>
        </ProductDetailsContainer>
      )}
    </PageLayout>
  );
};

export default ProductDetails;
