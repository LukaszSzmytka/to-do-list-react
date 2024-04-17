import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, NavBar, StyledUl, StyledLi } from "./styled.js";

const App = () => (
  <HashRouter>
    <nav>
      <NavBar>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
      </NavBar>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
