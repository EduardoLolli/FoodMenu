import styled from "styled-components";

const StyledAddCartInfo = styled("div")`
  display: flex;
  margin-bottom: 5px;

  .image-container {
    width: 6rem;
    height: 6rem;
    border-radius: 0.75rem;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 1rem;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-container {
    flex: 1;
  }

  .info-container h4 {
    font-weight: bold;
    font-size: 1.125rem; /* text-lg */
    margin-bottom: 0.25rem; /* mb-1 */
  }

  .info-container p {
    color: #4a5568; /* text-gray-600 */
    font-size: 0.875rem; /* text-sm */
    margin-bottom: 0.5rem; /* mb-2 */
  }

  .price-div {
    display: flex;
    align-items: center;
  }

  .price-div span {
    color: #e53e3e; /* text-red-600 */
    font-weight: bold;
    font-size: 1.125rem; /* text-lg */
  }
`;

export default StyledAddCartInfo;
