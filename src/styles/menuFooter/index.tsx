import styled from "styled-components";

const StyledMenuFooter = styled("footer")`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 -10px 30px -16px #000000c8;

  .menu-footer-button {
    border: none;
    background-color: transparent;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-footer-text {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;
export default StyledMenuFooter;
