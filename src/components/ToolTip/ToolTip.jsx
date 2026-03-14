import PropTypes from "prop-types";
import { useState } from "react";
import styles from './ToolTip.module.scss'

const ToolTip = (props) => {
  const { children, textToolTip } = props;
  const [isVisible, setIsVisible] = useState(false);
  const setOnVisible = () => {
    setIsVisible(true);
  };
  const setOutVisible = () => {
    setIsVisible(false);
  };
  return (
    <div className={styles.mainElement}>
      <div onMouseEnter={setOnVisible} onMouseLeave={setOutVisible}>
        {children}
      </div>
      <div>{isVisible && <div className={styles.tooltip}>{textToolTip}</div>}</div>
    </div>
  );
};

ToolTip.propTypes = {
  children: PropTypes.any,
  textToolTip: PropTypes.string,
};

export default ToolTip;
