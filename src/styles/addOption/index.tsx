import styled from "styled-components";

const StyledAddOption = styled("div")`
  display: flex;
  margin: 2px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  &:hover {
    border-color: #f87171;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  transition: all 0.3s;
  cursor: pointer;

  .option-container {
    display: flex;
    align-items: center;
  }

  .option-container input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: #f87171;
    margin-right: 0.75rem;
    cursor: pointer;
  }

  .option-container label {
    cursor: pointer;
  }

  .option-name {
    font-weight: 500;
  }

  .option-desc {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .option-price {
    font-weight: 500;
    font-size: 0.875rem;
  }

  
`;

export default StyledAddOption;
