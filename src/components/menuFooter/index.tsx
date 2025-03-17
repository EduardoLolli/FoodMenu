import StyledMenuFooter from "../../styles/menuFooter";

const MenuFooter = () => {
  return (
    <StyledMenuFooter className="">
      <button className="menu-footer-button">
        <span className="material-symbols-outlined">search</span>
        {/* <span className="menu-footer-text">Buscar</span> */}
      </button>
      <button className="menu-footer-button">
        <span className="material-symbols-outlined">shopping_cart</span>
        {/* <span className="menu-footer-text">Carrinho</span> */}
      </button>
      <button className="menu-footer-button">
        <span className="material-symbols-outlined">local_shipping</span>
        {/* <span className="menu-footer-text">Receber</span> */}
      </button>
    </StyledMenuFooter>
  );
};

export default MenuFooter;
