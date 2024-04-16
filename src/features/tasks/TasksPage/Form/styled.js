import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: white;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.04);

        @media (max-width: 767px) {
            transform: scaleY(1.04);
        }
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;