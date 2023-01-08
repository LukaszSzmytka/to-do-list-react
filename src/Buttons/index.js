import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="buttons__button">
          {hideDoneTasks === false ? "Ukryj" : "Pokaż"} ukończone
        </button>

        <button
          disabled={tasks.every(({ done }) => done) ? "disabled" : ""}
          className="buttons__button"
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default Buttons;
