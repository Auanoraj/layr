import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Spinner } from "./styles/Loaders";

import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

import { ProductDataContextProvider } from "./contexts/ProductDataContext";

const App = () => {
  const isLoading = false;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductDataContextProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/product/:productId"
              element={<ProductDetails />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProductDataContextProvider>
      )}
    </>
  );
};

export default App;
