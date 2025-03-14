import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "../pages/menu";
import LateralMenu from "../components/lateralMenu";
import { FoodMenuProvider } from "../context";
import MenuList from "../components/menuList";

const FoodMenuRoutes = () => {
  return (
    <BrowserRouter>
      <FoodMenuProvider>
        <Routes>
          <Route path="/menu" element={<MenuPage><MenuList></MenuList></MenuPage>} />
          <Route path="/close" element={<LateralMenu />} />
          <Route />
          <Route />
        </Routes>
      </FoodMenuProvider>
    </BrowserRouter>
  );
};

export default FoodMenuRoutes;
