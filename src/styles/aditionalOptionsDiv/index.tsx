import styled from "styled-components";

const StyledAditionalOptionsDiv = styled("div")`
  margin-bottom: 5px;

  h4 {
    font-weight: bold;
    margin-bottom: 3px;
  }

  .add-opt-div{
  max-height: 16rem;
  overflow-y: auto;
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
`;

export default StyledAditionalOptionsDiv;
