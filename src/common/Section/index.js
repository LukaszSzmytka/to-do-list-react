import { StyledSection, StyledSectionHeader, StyledSectionTitle, StyledSectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledSectionHeader>
          <StyledSectionTitle>{title}</StyledSectionTitle>
          {extraHeaderContent}
        </StyledSectionHeader>
        <StyledSectionBody>{body}</StyledSectionBody>
    </StyledSection>
);

export default Section;
