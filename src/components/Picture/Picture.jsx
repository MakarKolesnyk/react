import styles from "./Picture.module.css"
import PropTypes from 'prop-types'

const Picture = (props) => {
  const { src, alt } = props;
  return <img className={styles.img} src={src} alt={alt} />;
};

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Picture;
