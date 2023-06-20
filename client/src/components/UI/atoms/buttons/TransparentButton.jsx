import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./buttonStyles.css";
export default function TransparentButton({ buttonText = "Button" }) {
    return (
        <Button className="buttonStyle transparent">
            <span>{buttonText}</span>
        </Button>
    );
}

TransparentButton.propTypes = {
    buttonText: PropTypes.string,
};
