import MenuFooter from "../../components/menuFooter";
import MenuHeader from "../../components/menuHeader";
import StyledMenuPage from "../../styles/menuPage";

const MenuPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMenuPage>
      <MenuHeader></MenuHeader>
      {children}
      <MenuFooter></MenuFooter>
    </StyledMenuPage>
  );
};

export default MenuPage;
