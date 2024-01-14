import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function TransparentButton({ className, text = "Button" }) {
    return (
        <Button variant="outline-secondary" size="lg" className={className}>
            <span>{text}</span>
        </Button>
    );
}

TransparentButton.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};
