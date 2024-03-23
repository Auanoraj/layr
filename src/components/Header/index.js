import React, { useContext } from "react";
import { HeaderContainer } from "../../styles/styled-components/header";
import { ProductDataContext } from "../../contexts/ProductDataContext";
import { useDebounce } from "../../hooks/useDebounce";

const Header = () => {
  const { handleProductDetails } = useContext(ProductDataContext) || {};

  const handleSearch = (e) => {
    handleProductDetails(e[0].target.value);
  };

  const searchTerm = useDebounce(handleSearch, 200);

  return (
    <HeaderContainer>
      <span>LAYR</span>
      <input
        data-testid="search-input"
        type="text"
        onChange={searchTerm}
        placeholder="Search by product name"
      />
    </HeaderContainer>
  );
};

export default Header;
