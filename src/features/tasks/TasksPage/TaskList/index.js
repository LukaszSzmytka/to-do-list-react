import { Link } from "react-router-dom";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice";
import { TasksList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <TasksList>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button deleteTask onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Item>
      ))}
    </TasksList>
  );
};

export default TaskList;
