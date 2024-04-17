import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: hsl(180, 100%, 25%);

  &:hover {
        color: hsl(180, 100%, 30%);
    }
`;

export const TasksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid hsl(0, 0%, 83%);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  word-break: break-all;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  color: white;
  padding: 0;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: hsl(120, 100%, 25%);
      transition: 1s;

      &:hover {
        background-color: hsl(120, 100%, 30%);
      }

      &:active {
        background-color: hsl(120, 100%, 35%);
      }
    `}

  ${({ deleteTask }) =>
    deleteTask &&
    css`
      background-color: hsl(0, 100%, 35%);
      transition: 1s;

      &:hover {
        background-color: hsl(0, 100%, 40%);
      }

      &:active {
        background-color: hsl(0, 100%, 45%);
      }
    `}
`;
