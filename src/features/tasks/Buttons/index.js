import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={() => {
              dispatch(toggleHideDone());
            }}
          >
            {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
          </Button>

          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => {
              dispatch(setAllDone());
            }}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};
export default Buttons;
