import styles from "./ModelWindow.module.scss";
import { PropTypes } from "prop-types";

const ModelWindow = (props) => {
  const { children, closeModel } = props;
  return (
    <div className={styles.outword}>
      <div className={styles.inward}>
        <button onClick={closeModel}>X</button>
        {children}
      </div>
    </div>
  );
};

ModelWindow.propTypes = {
  children: PropTypes.any,
  closeModel: PropTypes.function,
};

export default ModelWindow;
