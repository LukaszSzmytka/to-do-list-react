import React from "react";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <Button
         onClick={toggleHideDone}
        >
          {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
        </Button>

        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </StyledButtons>
);
export default Buttons;
