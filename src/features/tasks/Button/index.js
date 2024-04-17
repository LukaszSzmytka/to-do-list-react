import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    transition: 1s;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: lightgray;
    }
`;