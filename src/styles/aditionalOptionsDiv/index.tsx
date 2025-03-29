import styled from "styled-components";

const StyledAditionalOptionsDiv = styled("div")`
  margin-bottom: 5px;

  h4 {
    font-weight: bold;
    margin-bottom: 3px;
  }

  .add-opt-div {
    max-height: 16rem;
    overflow-y: auto;
    max-height: 180px;
    padding-right: 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: #f56565 #f7fafc;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f7fafc;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #f56565;
      border-radius: 9999px;
    }
  }
  .space {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  // travel option

  .travel-option {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .travel-option div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  .travel-label {
    display: inline-flex;
    position: relative;
    align-items: center;
    cursor: pointer;
  }

  .travel-label input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: #f87171;
    margin-right: 0.75rem;
    cursor: pointer;
    border: 2px solid #cbd5e0;
    border-radius: 0.25rem;
    accent-color: #f87171;
    background-color: white;
    transition: background-color 0.2s, border-color 0.2s;
  }
`;

export default StyledAditionalOptionsDiv;
