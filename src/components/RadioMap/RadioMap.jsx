import { useState } from "react";
import { PropTypes } from "prop-types";

const RadioMap = (props) => {
  const { list, name} = props;
  const [selectUser, setSelectUser] = useState("car");
  const changeSelectUser = (event) => {
    setSelectUser(event.target.value);
  };
  const showRadio = (elem) => (
    <label key={elem.value} style={{ display: "block" }}>
      <input
        type="radio"
        name={name}
        value={elem.value}
        onChange={changeSelectUser}
        checked={elem.value === selectUser}
      />
      {elem.label}
    </label>
  );
  return (
    <>
      {list.map(showRadio)}
      <p>Your choose: {selectUser}</p>
    </>
  );
};

RadioMap.PropTypes = {
  list: PropTypes.array,
  name: PropTypes.string,
};

export default RadioMap;
