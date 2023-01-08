import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button
         onClick={toggleHideDone}
         className="buttons__button"
        >
          {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
        </button>

        <button
          disabled={tasks.every(({ done }) => done) ? "disabled" : ""}
          className="buttons__button"
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default Buttons;
