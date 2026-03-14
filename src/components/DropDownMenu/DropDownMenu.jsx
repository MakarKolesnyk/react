import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./DropDownMenu.module.scss";

const DropDownMenu = (props) => {
  const { children, text, widthList = 100 } = props;
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.parrent}>
      <button onClick={changeIsOpen}>{text}</button>
      {isOpen && (
        <div style={{ width: widthList + "px" }} className={styles.list}>
          {children}
        </div>
      )}
    </div>
  );
};

DropDownMenu.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  widthList: PropTypes.number,
};

export default DropDownMenu;
