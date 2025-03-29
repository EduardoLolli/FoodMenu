import styled from "styled-components";

const StyledAddCart = styled("div")`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;

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

  .quantity-control {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
  .quantity-button {
    width: 2.5rem; /* equivalent to w-10 */
    height: 2.5rem; /* equivalent to h-10 */
    border-radius: 9999px; /* equivalent to rounded-full */
    background-color: #d6d6d6; /* equivalent to bg-gray-100 */
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #9b9b9b; /* equivalent to hover:bg-gray-200 */
    }
    transition: background-color 0.2s; /* equivalent to transition-colors */
    &:active {
      transform: scale(0.98);
    }
  }

  .current-quantity {
    margin-left: 1rem; /* equivalent to mx-4 */
    margin-right: 1rem; /* equivalent to mx-4 */
    font-weight: bold;
    font-size: 1.25rem; /* equivalent to text-xl */
    width: 2.5rem; /* equivalent to w-10 */
    text-align: center;
  }

  .confirm-button {
    width: 100%; /* equivalent to w-full */
    padding-top: 0.75rem; /* equivalent to py-3 */
    padding-bottom: 0.75rem; /* equivalent to py-3 */
    background-color: #e53e3e; /* equivalent to bg-red-600 */
    color: white;
    border: none;
    margin-bottom: 20px;
    border-radius: 0.75rem; /* equivalent to rounded-xl */
    font-weight: bold;
    font-size: 1.125rem; /* equivalent to text-lg */
    &:hover {
      background-color: #c53030; /* equivalent to bg-red-700 */
      transform: scale(1.02);
    }
    transition: all 0.2s;
    &:active {
      transform: scale(0.98);
    }
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* equivalent to shadow-md */
  }

  .price-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem; /* equivalent to mb-2 */
  }

  .price-text {
    color: #4a5568; /* equivalent to text-gray-700 */
    font-weight: 500; /* equivalent to font-medium */
  }

  .total-price {
    font-weight: bold; /* equivalent to font-bold */
    font-size: 1.125rem; /* equivalent to text-lg */
  }

  .fake-background {
    height: 100vh;
    width: 100%;
  }
`;

export default StyledAddCart;
