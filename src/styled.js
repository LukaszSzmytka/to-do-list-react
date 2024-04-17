import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  background-color: hsl(180, 100%, 25%);
`;

export const StyledUl = styled.ul`
  margin: 0px;
  padding: 20px;
  display: grid;
  grid-template-columns: 100px 100px;
  place-items: center;
  place-content: center;
  grid-column-gap: 30px;
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: whitesmoke;
  &.active {
    font-weight: bold;
  }
`;
