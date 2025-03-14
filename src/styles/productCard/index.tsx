import styled from "styled-components";

const StyledProductCard = styled("div")`
  background-color: white;
  border-radius: 1rem;
  margin: 2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }

  .img-card-container {
    position: relative;
    height: 8rem; /* 32 divided by 4 to convert to rem */
  }

  .img-card-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-card-container {
    padding: 0.5rem; /* 2 divided by 4 to convert to rem */
  }
  .product-card-container p {
    color: #4a5568; /* text-gray-600 */
    font-size: 0.75rem; /* text-xs */
    margin-bottom: 0.5rem; /* mb-2 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-name {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0.25rem; /* 1 divided by 4 to convert to rem */
  }

  .product-name h3 {
    font-weight: bold;
    font-size: 1rem; /* 14px */
  }

  .ttt {
    font-weight: bold;
    font-size: 0.875rem; /* 14px */
  }

  .price-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price-div span {
    color: #e53e3e; /* text-red-600 */
    font-weight: bold; /* font-bold */
    font-size: 0.875rem; /* text-sm */
  }
`;

export default StyledProductCard;
