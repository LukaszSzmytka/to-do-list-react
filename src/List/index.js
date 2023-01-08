import "./style.css";

const List = ({ tasks, hideDone, removeTask }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li key={task.id} className={`list__items ${task.done && hideDone === true ? " list__items--hidden" : ""}`}>
        <button className="list__buttons list__buttons--done">
          {task.done ? "✓" : ""}
        </button>
        <span className={`list__itemsText ${task.done ? " list__itemsText--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="list__buttons list__buttons--delete"
          onClick={() => removeTask(task.id)}
        >
            🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default List;
