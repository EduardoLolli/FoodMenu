import { useContext } from "react";
import StyledMenuHeader from "../../../styles/menuHeader";
import LateralMenu from "../../lateralNavBar/lateralMenu";
import { FoodMenuContext } from "../../../context";

const MenuHeader = () => {
  const teste = true;
  const { lateralBar, setLateralBar } = useContext(FoodMenuContext);
  return (
    <StyledMenuHeader>
      {lateralBar ? <LateralMenu></LateralMenu> : <></>}
      <div className="first-div">
        <button onClick={() => setLateralBar(!lateralBar)}>
          <span className="material-symbols-outlined menu-icon">menu</span>
        </button>
        <span className="material-symbols-outlined menu-icon">
          restaurant_menu
        </span>
        <h1 className="header-tittle">FoodMenu</h1>
      </div>
      <div className="second-div">
        <span className="material-symbols-outlined menu-icon shopping-cart">
          shopping_cart
        </span>
        {teste ? <></> : <span className="shopping-cart-count">3</span>}
      </div>
    </StyledMenuHeader>
  );
};

export default MenuHeader;
