import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "../pages/menu";
import LateralMenu from "../components/lateralMenu";

const FoodMenuRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="lateralmenu" element={<LateralMenu/>} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default FoodMenuRoutes;
