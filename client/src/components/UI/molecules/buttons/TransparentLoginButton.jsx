import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function TransparentLoginButton({ size }) {
    return (
        <Button variant="outline-light" size={size}>
            Login
        </Button>
    );
}

TransparentLoginButton.propTypes = {
    size: PropTypes.string, // PropTypes for the size prop
};
