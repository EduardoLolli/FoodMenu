import styled from "styled-components";

const StyledButtonsDisplay = styled("div")`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e0; /* scrollbar-thumb color */
    border-radius: 9999px; /* rounded-full */
  }

  .menuButtons {
    flex-shrink: 0;
    padding: 0.75rem 1rem;
    background-color: white;
    color: #4a5568; /* text-gray-700 */
    border-radius: 9999px; /* rounded-full */
    margin-right: 0.5rem; /* mr-2 */
    border: none;
    &:hover {
      background-color: #e2e8f0; /* bg-gray-200 */
      transform: scale(1.05);
    }
    transition: all 0.2s;
  }
`;

export default StyledButtonsDisplay;
