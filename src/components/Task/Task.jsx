import PropTypes from "prop-types";

const Task = (props) => {
  const { text, days, isDone } = props;
  return (
    <div>
      <p style={{color: isDone ? "green" : "red"}}>{text}</p>
      <p>days to end {days}</p>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  isDone: PropTypes.bool,
};

export default Task;
