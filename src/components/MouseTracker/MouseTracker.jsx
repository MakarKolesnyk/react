import { useState } from "react";
import PropTypes from "prop-types";

const MouseTracker = (props) => {
  const { render } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const changePosition = (event) => {
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  };
  return (
    <div
      onMouseMove={changePosition}
      style={{ height: "50vh", backgroundColor: "aqua", position: 'relative'}}
    >
      {render(position)}
    </div>
  );
};

MouseTracker.propTypes = {
  render: PropTypes.func,
};

export default MouseTracker;
