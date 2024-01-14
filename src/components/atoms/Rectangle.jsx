import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Rectangle = ({ width, height, color, children }) => {
    const rectangleStyle = {
        width,
        height,
        backgroundColor: color,
    };

    return <div style={rectangleStyle}>{children}</div>;
};

Rectangle.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Rectangle;
