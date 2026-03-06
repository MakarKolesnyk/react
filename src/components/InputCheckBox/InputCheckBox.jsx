import { useState } from "react";

const InputCheckBox = () => {
  const [isCheck, setIsCheck] = useState(false);
  const changeIsCheck = (event) => {
    setIsCheck(event.target.checked);
  };
  return (
    <label>
      CheckBox:
      <input type="checkbox" checked={isCheck} onChange={changeIsCheck} />
      {isCheck ? "yes" : "no"}
    </label>
  );
};

export default InputCheckBox;
