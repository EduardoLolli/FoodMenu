import StyledAddCartInfo from "../../styles/addCartInfo";
import StyledAddCart from "../../styles/addShoppinhCar";
import StyledAditionalOptionsDiv from "../../styles/aditionalOptionsDiv";
import AddOption from "../addOption";

const AddCart = () => {
  return (
    <StyledAddCart className="">
      <div className="cart-container">
        <div className="title-cart-header">
          <button>
            <span className="material-symbols-outlined">close</span>
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
            <div className="space-y-3">
              <AddOption></AddOption>
            </div>
          </div>
        </StyledAditionalOptionsDiv>

        <div className="flex items-center justify-center mb-5">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <span className="material-symbols-outlined font-bold">remove</span>
          </button>
          <div className="mx-4 font-bold text-xl w-10 text-center">1</div>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <span className="material-symbols-outlined font-bold">add</span>
          </button>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 font-medium">Subtotal:</span>
          <span className="font-bold text-lg">R$ 29,90</span>
        </div>

        <button className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transform hover:scale-[1.02] transition-all active:scale-[0.98] shadow-md">
          Adicionar ao carrinho
        </button>
      </div>
    </StyledAddCart>
  );
};

export default AddCart;
