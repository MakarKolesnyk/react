import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold, mdiArrowUpBold } from "@mdi/js";
import { getRandomColor } from "../../utils";

const ToggleText = (props) => {
  const [color, setColor] = useState("#aaaaaa");
  const [close, setClose] = useState(false);
  const { title } = props;
  const changeClose = () => {
    setClose(!close);
  };
  const changeColor = () => {
    setColor(getRandomColor());
  };
  return (
    <div onClick={changeColor} style={{ backgroundColor: color }}>
      <h2>
        {title}
        <span onClick={changeClose}>
          {close ? (
            <Icon path={mdiArrowUpBold} size={1} />
          ) : (
            <Icon path={mdiArrowDownBold} size={1} />
          )}
        </span>
      </h2>
      {close && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          nisi.
        </p>
      )}
    </div>
  );
};

export default ToggleText;
