import styled from "styled-components";

const StyledLateralMenu = styled("div")`
  position: absolute; /* absolute */
  top: 0; /* top-0 */
  left: 0; /* left-0 */
  height: 100%; /* h-full */
  width: 280px;
  background-color: white; /* bg-white */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
  z-index: 40; /* z-40 */
  transform: translateX(0); /* transform (padrão visível) */
  transition: transform 0.3s ease-in-out; /* transition-transform duration-300 */
  overflow-y: auto; /* overflow-y-auto */
  font-family: Arial, Helvetica, sans-serif;

  /* Para esconder a sidebar (exemplo de estado fechado) */
  .hidden {
    transform: translateX(-100%);
  }

  .lat-bar-header {
    background-color: #dc2626; /* bg-red-600 */
    position: sticky;
    top: 0; /* fixar no topo */
    color: white; /* text-white */
    padding: 1.25rem; /* p-5 */
    display: flex; /* flex */
    align-items: center; /* items-center */
    z-index: 100;
  }

  .close-button {
    margin-right: 0.75rem; /* mr-3 */
    transition: transform 0.2s ease-in-out; /* transition-transform */
    border: none;
    background: none;
    cursor: pointer; /* cursor-pointer */
  }

  .close-button:hover {
    transform: scale(1.1); /* hover:scale-110 */
  }

  .close-button:focus {
    outline: none; /* focus:outline-none */
  }

  .lat-bar-icon {
    font-size: 1.5rem; /* text-2xl (24px) */
    margin-right: 0.5rem; /* mr-2 */
    color: white;
  }

  .lat-bar-title {
    margin: 0;
    font-size: 1.25rem; /* text-xl (20px) */
    font-weight: bold; /* font-bold */
  }

  .lat-bar-body {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .lat-bar-info {
    padding-left: 1.25rem; /* px-5 */
    padding-right: 1.25rem; /* px-5 */
    padding-top: 0.75rem; /* py-3 */
    padding-bottom: 0.75rem; /* py-3 */
    background-color: #f3f3f3; /* bg-gray-50 */
    border-radius: 0.375rem; /* rounded-md */
    margin-left: 0.5rem; /* mx-2 */
    margin-right: 0.5rem; /* mx-2 */
    margin-bottom: 1rem; /* mb-4 */
  }

  .lat-bar-info h3 {
    margin-top: 0;
    color: #131922; /* text-gray-800 */
    font-weight: 500; /* font-medium */
    margin-bottom: 0.25rem; /* mb-1 */
  }

  .lat-bar-info div {
    display: flex; /* flex*/
    flex-direction: column; /* flex-col */
    font-size: 0.75rem; /* text-xs (equivalente a 12px) */
    color: #4b5563; /* text-gray-600 */
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  width: 450px;
  }
  @media (min-width: 1024px) {
  width: 450px;
  }
  @media (min-width: 1366px) {
  width: 450px;
  }
`;

export default StyledLateralMenu;
