import styled from "styled-components";

export const FilterAndSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding: 24px 0;
  position: sticky;
  top: 51px;
`;

export const SortContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px 8px;
  gap: 8px;
  width: max-content;

  div {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    text-transform: capitalize;
  }
`;

export const FilterContainer = styled(SortContainer)``;

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 32px;
  grid-gap: 32px;
  width: 100%;
`;

export const CatalogLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
`;
