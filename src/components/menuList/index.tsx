import { useContext, useEffect, useState } from "react";
import StyledMenuList from "../../styles/menuList";
import StyledButtonsDisplay from "../../styles/menuButton";
import { FoodMenuContext } from "../../context";
import ProductCard from "../ProductCard";
import StyledProductDisplay from "../../styles/productGrid";
import { IProduto } from "../../context/interface";
import AddCart from "../addCart";

const MenuList = () => {
  const [inputValue, setInputValue] = useState("");

  const { productsApi, useAddCart, setUseAddCart } =
    useContext(FoodMenuContext);
  const allProducts =
    productsApi?.flatMap((categoria) => categoria.products) || [];
  const [menu, setMenu] = useState<IProduto[]>([]);
  const [loading, setLoading] = useState(true);
  const [sectionName, setSectionName] = useState("Todos");

  useEffect(() => {
    if (allProducts.length > 0) {
      setMenu(allProducts);
      setLoading(false);
    }
  }, [productsApi]);

  return (
    <StyledMenuList>
      {useAddCart ? <AddCart></AddCart> : null}
      <div className="input-container">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Buscar pratos, bebidas..."
          className="input-styles"
        />
        <button
          onClick={() => {
            alert(inputValue);
          }}
          className="input-icon-styles"
        >
          search
        </button>
      </div>

      <StyledButtonsDisplay>
        <button
          className="menuButtons"
          onClick={() => {
            setMenu(allProducts);
            setSectionName("Todos");
          }}
        >
          Todos
        </button>
        {productsApi?.map((categoria, index) => {
          return (
            <button
              key={index}
              className="menuButtons"
              onClick={() => {
                setMenu(categoria.products);
                setSectionName(categoria.name);
              }}
            >
              {categoria.name}
            </button>
          );
        })}
      </StyledButtonsDisplay>

      <h2 className="text-xl font-bold mb-3">{sectionName}</h2>

      <StyledProductDisplay>
        <div className="product-grid">
          {menu?.map((produto, index) => (
            <ProductCard produto={produto} key={index}></ProductCard>
          ))}
        </div>
      </StyledProductDisplay>
    </StyledMenuList>
  );
};

export default MenuList;
