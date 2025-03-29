import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "../pages/menu";
import { FoodMenuProvider } from "../context";
import MenuList from "../components/menu/menuList";
import AddCart from "../components/addProdCart/addCart";

const FoodMenuRoutes = () => {
  return (
    <BrowserRouter>
      <FoodMenuProvider>
        <Routes>
          <Route
          
            path="/"
            element={
              <MenuPage>
                <MenuList></MenuList>
              </MenuPage>
            }
          />
          <Route path="/addcart" element={<AddCart />} />
          <Route />
          <Route />
        </Routes>
      </FoodMenuProvider>
    </BrowserRouter>
  );
};

export default FoodMenuRoutes;
