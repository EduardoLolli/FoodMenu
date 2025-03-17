import styled from "styled-components";

const StyledMenuList = styled("div")`
  padding: 1rem;
  padding-bottom: 5rem;

  .input-container {
    margin-bottom: 1rem;
    position: relative;
  }

  .input-styles {
    width: 100%;
    padding: 0.75rem;
    padding-right: 2.5rem;
    border-radius: 9999px;
    border: 1px solid #d1d5db;
    &:focus {
      border-color: #ef4444;
      outline: none;
      box-shadow: 0 0 0 2px #fecaca;
    }
    transition: all 0.2s;
  }

  .input-icon-styles {
    background-color: transparent;
    border: none;
    height: 30px;
    width: 30px;
    font-family: "Material Symbols Outlined";
    position: absolute;
    right: 0.75rem;
    top: 0.40rem;
    color: #6b7280;
  }
`;

export default StyledMenuList;
