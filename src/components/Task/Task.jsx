import PropTypes from "prop-types";
import styles from "./Task.module.css";

const Task = (props) => {
  const {
    dataTask: { id, text, days, isDone },
    setDoneTask,
    setNotDoneTask,
  } = props;
  const setDone = () => setDoneTask(id);
  const setNotDone = () => setNotDoneTask(id);
  return (
    <div className={styles.task}>
      <button onClick={setNotDone}>Undone</button>
      <p style={{ color: isDone ? "green" : "red" }}>{text}</p>
      <p>days to end {days}</p>
      <button onClick={setDone}>Done</button>
    </div>
  );
};

Task.propTypes = {
  dataTask: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    isDone: PropTypes.bool,
  }),
  setDoneTask: PropTypes.func,
  setNotDoneTask: PropTypes.func,
};

export default Task;
