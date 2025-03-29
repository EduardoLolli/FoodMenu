import StyledAddOption from "../../../styles/addOption";

const AddOption = () => {
  return (
    <StyledAddOption>
      <div className="option-container">
        <input type="checkbox" id="extraSauce" />
        <label htmlFor="extraSauce">
          <div className="option-name">Molho especial</div>
          <div className="option-desc">Porção extra de molho da casa</div>
        </label>
      </div>
      <span className="option-price">+ R$ 2,00</span>
    </StyledAddOption>
  );
};

export default AddOption;
