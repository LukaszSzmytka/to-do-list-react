import styled from "styled-components";

export const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;