import styled from "styled-components";

const StyledMenuHeader = styled("header")`
  /* bg-red-600 text-white p-4 flex justify-between items-center shadow-md z-20 sticky top-0 */
  background-color: #dc2626; /* bg-red-600 */
  color: white; /* text-white */
  padding: 1rem; /* p-4 */
  display: flex; /* flex */
  justify-content: space-between; /* justify-between */
  align-items: center; /* items-center */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  position: sticky; /* sticky */
  top: 0; /* top-0 */
  z-index: 20; /* z-20 */

  .menu-icon {
    font-size: 24px; /* text-2xl */
  }
  .menu-button {
    font-size: 24px; /* text-2xl */
    border: none;
  }

  .first-div {
    display: flex;
    align-items: center;
  }

  .first-div button {
    margin-right: 0.75rem; /* mr-3 */
    transition: transform 0.2s ease-in-out; /* transition-transform */
    border: none;
    background-color: transparent;
    color: white;
  }

  .first-div button:hover {
    transform: scale(1.1); /* hover:scale-110 */
  }

  .first-div button:focus {
    outline: none; /* focus:outline-none */
  }

  .header-tittle {
    margin: 0;
    padding: 0;
    margin-left: 0.5rem; /* ml-2 */
    font-size: 1.25rem; /* text-xl (equivalente a 20px) */
    font-weight: bold; /* font-bold */
  }

  .second-div {
    position: relative;
  }
  .shopping-cart {
    cursor: pointer; /* cursor-pointer */
    transition: transform 0.2s ease-in-out; /* transition-transform */
  }

  .shopping-cart:hover {
    transform: scale(1.1); /* hover:scale-110 */
  }

  .shopping-cart-count {
    position: absolute; /* absolute */
    top: -4px; /* -top-1 (aproximadamente -4px) */
    right: -4px; /* -right-1 (aproximadamente -4px) */
    background-color: #facc15; /* bg-yellow-400 */
    color: #dc2626; /* text-red-600 */
    border-radius: 9999px; /* rounded-full */
    width: 20px; /* w-5 (equivalente a 20px) */
    height: 20px; /* h-5 (equivalente a 20px) */
    display: flex; /* flex */
    align-items: center; /* items-center */
    justify-content: center; /* justify-center */
    font-size: 0.75rem; /* text-xs (equivalente a 12px) */
    font-weight: bold; /* font-bold */
  }
`;

export default StyledMenuHeader;
