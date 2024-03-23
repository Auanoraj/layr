import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  max-width: 100%;
  background-color: #00b3b3;
  padding: 12px 18px;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  flex-wrap: wrap;

  span {
    cursor: default;
  }

  input[type="text"] {
    border: none;
    margin-left: 20%;
    width: 50%;
    padding: 6px;
    outline: none;
  }
`;
