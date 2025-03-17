import { useContext } from "react";
import StyledLateralMenu from "../../styles/lateralMenu";
import LateralBarOption from "../lateralBarOption";
import LateralBarSection from "../lateralBarSection";
import { FoodMenuContext } from "../../context";

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
                optionText="Cancelar Venda"
              />
              <LateralBarOption
                optionIcon="point_of_sale"
                optionText="Fechar Caixa"
              />
              <LateralBarOption
                optionIcon="settings"
                optionText="Funções Gerais"
              />
              <LateralBarOption
                optionIcon="receipt_long"
                optionText="Funções Fiscais"
              />
            </LateralBarSection>

            <LateralBarSection sectionName="Consumidor">
              <LateralBarOption
                optionIcon="person_add"
                optionText="Cadastro de Consumidor"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="credit_card"
                optionText="Crédito Pessoal"
              ></LateralBarOption>
            </LateralBarSection>

            <LateralBarSection sectionName="Administração">
              <LateralBarOption
                optionIcon="sync_alt"
                optionText="Trocar de modo"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="terminal"
                optionText="Verificar Log ativo"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="support_agent"
                optionText="Fale Conosco"
              ></LateralBarOption>
              <LateralBarOption
                optionIcon="logout"
                optionText="Sair"
              ></LateralBarOption>
            </LateralBarSection>

            <LateralBarSection sectionName="Local X Nuvem">
              <LateralBarOption
                optionIcon="history_toggle_off"
                optionText="Verificar Apontamento"
              ></LateralBarOption>
            </LateralBarSection>
          </div>
        </div>
      </div>
    </StyledLateralMenu>
  );
};

export default LateralMenu;
