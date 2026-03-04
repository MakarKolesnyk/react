import { useState } from "react";

const ToggleText = (props) => {
  const [close, setClose] = useState(true);
  const { title } = props;
  const changeClose = () => {
    setClose(!close);
  };
  return (
    <div>
      <h2>
        {title} <button onClick={changeClose}>{close ? "hide" : "open"}</button>
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
