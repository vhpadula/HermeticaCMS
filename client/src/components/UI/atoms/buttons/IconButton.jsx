import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "./buttonStyles.css";

export default function CustomButton({ children, text }) {
    return (
        <Button className="buttonStyle mediumSmall">
            {children}
            <span>{text}</span>
        </Button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};
