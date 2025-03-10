import styled from "styled-components";

const StyledLateralBarSection = styled("div")`
  margin-top: 0.75rem; /* mt-3 */
  border-top: 1px solid #d1d5db; /* border-t (border color gray-300) */
  padding-top: 0.5rem; /* pt-2 */

  .title-container {
    padding-left: 1.25rem; /* px-5 */
    padding-right: 1.25rem; /* px-5 */
    margin-bottom: 0.375rem; /* mb-1.5 (equivalente a 6px) */
  }

  .title {
    font-weight: 500; /* font-medium */
    color: #374151; /* text-gray-700 */
  }
`;

export default StyledLateralBarSection;
