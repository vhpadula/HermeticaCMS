import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rectangle = ({ width, height, color }) => {
  const rectangleStyle = {
    width,
    height,
    backgroundColor: color,
    borderRadius: '5px'
  };

  return <div style={rectangleStyle}></div>;
};

Rectangle.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rectangle;
