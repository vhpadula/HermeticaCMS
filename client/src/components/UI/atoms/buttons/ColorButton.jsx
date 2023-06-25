import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ColorButton = ({ className, text, size, variant, onClick }) => {
    return (
        <Button
            variant={variant}
            size={size}
            className={className}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

ColorButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    variant: PropTypes.string,
    onClick: PropTypes.func, // Define the onClick prop as a function
};

ColorButton.defaultProps = {
    size: "lg",
    variant: "secondary",
};

export default ColorButton;
