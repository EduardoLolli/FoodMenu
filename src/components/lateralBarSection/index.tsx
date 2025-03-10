import { ReactNode } from "react";
import StyledLateralBarSection from "../../styles/lateralBarSection";
interface ILateralBarSectionProps {
  sectionName: string;
  children: ReactNode;
}
const LateralBarSection = ({
  children,
  sectionName,
}: ILateralBarSectionProps) => {
  return (
    <StyledLateralBarSection>
      <div className="title-container">
        <h3 className="title">{sectionName}</h3>
      </div>
      {children}
    </StyledLateralBarSection>
  );
};

export default LateralBarSection;
