import PropTypes from "prop-types";

const Comment = (props) => {
  const {
    dataComent: { content, amountLike, isNew },
  } = props;
  return (
    <div style={{ backgroundColor: isNew ? "green" : "white" }}>
      <p>{content}</p>
      <p>Like = {amountLike}</p>
    </div>
  );
};

Comment.propTypes = {
    dataComent: PropTypes.shape({
        content: PropTypes.string.isRequired,
        amountLike: PropTypes.number,
        isNew: PropTypes.bool,
    })
};

export default Comment;
