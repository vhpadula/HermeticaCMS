import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ColorButton = ({ className, text, size, variant }) => {
    return (
        <Button variant={variant} size={size} className={className}>
            {text}
        </Button>
    );
};

ColorButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    variant: PropTypes.string,
};

ColorButton.defaultProps = {
    size: "lg",
    variant: "secondary",
};

export default ColorButton;
