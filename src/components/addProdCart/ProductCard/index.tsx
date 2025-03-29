import { useContext } from "react";
import { FoodMenuContext } from "../../../context";
import { IProduto } from "../../../context/interface";
import StyledProductCard from "../../../styles/productCard";

const ProductCard = ({ produto }: { produto: IProduto }) => {
  const { setUseAddCart } = useContext(FoodMenuContext);

  return (
    <StyledProductCard onClick={() => setUseAddCart(true)}>
      <div className="img-card-container">
        <img src={produto.imagem} alt={produto.name} />
      </div>

      <div className="product-card-container">
        <div className="product-name">
          <h3>{produto.name}</h3>
          <div className="ttt"></div>
        </div>
        <p>{produto.descricao}</p>
        <div className="price-div">
          <span>R$ {produto.price.toFixed(2).replace(".", ",")}</span>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
