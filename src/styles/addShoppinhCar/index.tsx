import styled from "styled-components";

const StyledAddCart = styled("div")`
  position: absolute;
  bottom: 0;
  transition: transform 0.3s;
  z-index: 30;

  .cart-container {
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .title-cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .title-cart-header div {
    width: 2rem; /* equivalent to w-8 */
  }

  .title-cart-header button {
    background-color: transparent;
    border: none;
    color: #a0aec0;
    &:hover {
      color: #4a5568;
    }
    transition: color 0.3s;
  }

  .title-cart-header button span {
    font-size: 1.5rem; /* equivalent to text-2xl */
  }

  .title-cart-header h3 {
    font-size: 1.125rem; /* equivalent to text-lg */
    font-weight: bold;
  }
`;

export default StyledAddCart;
