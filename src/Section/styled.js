import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: white;
    box-shadow: 0 0 5px hsl(0, 0%, 60%);
`

export const StyledSectionHeader = styled.div`
    padding: 20px;
    border-bottom: 1px solid hsl(0, 0%, 83%);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`

export const StyledSectionTitle = styled.h2`
    margin: 0;
`

export const StyledSectionBody = styled.div`
    padding: 20px;
`