import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ColorButton = ({ className, text }) => {
    return (
        <Button variant="secondary" size="lg" className={className}>
            {text}
        </Button>
    );
};

ColorButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default ColorButton;
