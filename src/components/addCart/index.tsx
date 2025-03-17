import { useContext } from "react";
import { FoodMenuContext } from "../../context";
import StyledAddCartInfo from "../../styles/addCartInfo";
import StyledAddCart from "../../styles/addShoppinhCar";
import StyledAditionalOptionsDiv from "../../styles/aditionalOptionsDiv";
import AddOption from "../addOption";

const AddCart = () => {
  const { useAddCart, setUseAddCart } =
    useContext(FoodMenuContext);

  return (
    <StyledAddCart>
      <div className="fake-background"></div>
      <div className="cart-container">
        <div className="title-cart-header">
          <button>
            <span
              className="material-symbols-outlined"
              onClick={() => setUseAddCart(!useAddCart)}
            >
              close
            </span>
          </button>
          <h3>Adicionar ao carrinho</h3>
          <div className=""></div>
        </div>

        <StyledAddCartInfo>
          <div className="image-container">
            <img
              src="https://static.itdg.com.br/images/1200-630/dadafb5a13a8fc316bded0ea8feb2a37/326223-original.jpg"
              alt="Hambúrguer Especial"
            />
          </div>
          <div className="info-container">
            <h4>Hambúrguer Especial</h4>
            <p>
              Hambúrguer artesanal com bacon, queijo cheddar e molho especial
            </p>
            <div className="price-div">
              <span>R$ 29,90</span>
            </div>
          </div>
        </StyledAddCartInfo>

        <StyledAditionalOptionsDiv>
          <h4>Opções adicionais</h4>
          <div className="add-opt-div">
            <div className="space">
              <AddOption></AddOption>
              <AddOption></AddOption>
            </div>
          </div>
        </StyledAditionalOptionsDiv>

        <div className="quantity-control">
          <button className="quantity-button">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <div className="current-quantity">1</div>
          <button className="quantity-button">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        <div className="price-div">
          <span className="price-text">Subtotal:</span>
          <span className="total-price">R$ 29,90</span>
        </div>

        <button className="confirm-button">Adicionar ao carrinho</button>
      </div>
    </StyledAddCart>
  );
};

export default AddCart;
