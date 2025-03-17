import StyledAddOption from "../../styles/addOption";

const AddOption = () => {
  return (
    <StyledAddOption>
      <div className="option-container">
        <input type="checkbox" id="extraSauce" />
        <label htmlFor="extraSauce">
          <div className="font-medium">Molho especial</div>
          <div className="text-xs text-gray-500">
            Porção extra de molho da casa
          </div>
        </label>
      </div>
      <span className="font-medium text-sm">+ R$ 2,00</span>
    </StyledAddOption>
  );
};

export default AddOption;
