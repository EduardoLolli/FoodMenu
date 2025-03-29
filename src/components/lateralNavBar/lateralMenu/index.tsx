import { useContext } from "react";
import StyledLateralMenu from "../../../styles/lateralMenu";
import { FoodMenuContext } from "../../../context";
import LateralBarSection from "../lateralBarSection";
import LateralBarOption from "../lateralBarOption";

const LateralMenu = () => {
  const { lateralBar, setLateralBar } = useContext(FoodMenuContext);
  return (
    <StyledLateralMenu>
      <div
        onClick={() => setLateralBar(!lateralBar)}
        className="shadow-background"
      ></div>
      <div className="lat-bar-all">
        <div className="lat-bar-header">
          <button
            onClick={() => setLateralBar(!lateralBar)}
            className="close-button"
          >
            <span className="material-symbols-outlined lat-bar-icon">
              close
            </span>
          </button>
          <span className="material-symbols-outlined lat-bar-icon">
            restaurant_menu
          </span>
          <h1 className="lat-bar-title">FoodMenu</h1>
        </div>
        <div className="lat-bar-body">
          <div className="lat-bar-info">
            <h3>Restaurant name</h3>
            <div>
              <span>Operador: Operator Identify</span>
              <span>Filial: Filial</span>
              <span>Caixa: 001</span>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <LateralBarSection sectionName="Aplicação">
              <LateralBarOption
                optionIcon="cancel"
                optionText="Opção texto"
              />
              <LateralBarOption
                optionIcon="point_of_sale"
                optionText="Opção texto"
              />
              <LateralBarOption
                optionIcon="settings"
                optionText="Opção texto"
              />
              <LateralBarOption
                optionIcon="receipt_long"
                optionText="Opção texto"
              />
            </LateralBarSection>

            <LateralBarSection sectionName="Consumidor">
              <LateralBarOption
                optionIcon="person_add"
                optionText="Opção texto"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="credit_card"
                optionText="Opção texto"
              ></LateralBarOption>
            </LateralBarSection>

            <LateralBarSection sectionName="Administração">
              <LateralBarOption
                optionIcon="sync_alt"
                optionText="Opção texto"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="terminal"
                optionText="Opção texto"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="support_agent"
                optionText="Opção texto"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="logout"
                optionText="Sair"
              ></LateralBarOption>
            </LateralBarSection>
          </div>
        </div>
      </div>
    </StyledLateralMenu>
  );
};

export default LateralMenu;
