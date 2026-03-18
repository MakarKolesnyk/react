import { mdiDelete } from "@mdi/js";
import Icon from "@mdi/react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskIsDone } from "../../store/todoSlice";

const Task = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  const toggleTask = () => {
    dispatch(toggleTaskIsDone({ id: task.id }));
  };
  const changeDelete = () => {
          dispatch(deleteTask({ id: task.id }));
        }
  return (
    <li key={task.id}>
      <strong
        onClick={toggleTask}
        style={{
          textDecoration: task.isDone && "line-through",
          cursor: "pointer",
        }}
      >
        {task.content}
      </strong>
      <span
        onClick={changeDelete}
      >
        <Icon path={mdiDelete} size={0.7} />
      </span>
    </li>
  );
};

// Task.propTypes = {
// task: PropTypes.array
// }

export default Task;
