/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ProductDataContext = createContext();

export const ProductDataContextProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState();

  const handleProductDetails = (prodData) => {
    setProductDetails(prodData);
  };

  return (
    <ProductDataContext.Provider
      value={{ productDetails, handleProductDetails }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};
