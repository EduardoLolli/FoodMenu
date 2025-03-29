import StyledLateralBardOption from "../../../styles/lateralBarOption";

interface ILateralBarOptionProps {
  optionIcon: string;
  optionText: string;
}

const LateralBarOption = ({
  optionIcon,
  optionText,
}: ILateralBarOptionProps) => {
  return (
    <StyledLateralBardOption>
      <span className="material-symbols-outlined option-icon">
        {optionIcon}
      </span>
      <span>{optionText}</span>
    </StyledLateralBardOption>
  );
};

export default LateralBarOption;
