import { Link, useLocation} from "react-router-dom";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { TasksList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
