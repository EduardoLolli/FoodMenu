import StyledAddCartInfo from "../../styles/addCartInfo";
import StyledAddCart from "../../styles/addShoppinhCar";

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

        <div className="mb-5">
          <h4 className="font-bold mb-3">Opções adicionais</h4>
          <div className="max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
            <div className="space-y-3">
              {/* <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all duration-300 cursor-pointer">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="extraSauce"
                    className="w-5 h-5 accent-red-600 mr-3 cursor-pointer"
                  />
                  <label htmlFor="extraSauce" className="cursor-pointer">
                    <div className="font-medium">Molho especial</div>
                    <div className="text-xs text-gray-500">
                      Porção extra de molho da casa
                    </div>
                  </label>
                </div>
                <span className="font-medium text-sm">+ R$ 2,00</span>
              </div> */}
            </div>
          </div>
        </div>

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
