import styled from "styled-components";

const StyledProductDisplay = styled("div")`
  overflow-y: auto;;
  padding-bottom: 4px;

  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
    text-align: center;

    @media (min-width: 468px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 668px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 868px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 1068px) {
      grid-template-columns: repeat(6, 1fr);
    }
    @media (min-width: 1268px) {
      grid-template-columns: repeat(7, 1fr);
    }
    @media (min-width: 1468px) {
      grid-template-columns: repeat(8, 1fr);
    }
    @media (min-width: 1668px) {
      grid-template-columns: repeat(9, 1fr);
    }
    @media (min-width: 1868px) {
      grid-template-columns: repeat(10, 1fr);
    }
  }
`;

export default StyledProductDisplay;
