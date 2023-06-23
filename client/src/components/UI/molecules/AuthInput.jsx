import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const AuthInput = ({
    controlId,
    type,
    placeholder,
    label,
    text,
    children,
    lettersOnly,
}) => {
    const labelStyles = {
        color: "var(--secondary-color)",
        fontSize: "inherit",
        display: "flex",
        alignItems: "center",
    };

    const iconStyles = {
        marginRight: "5px",
        height: "inherit",
        verticalAlign: "middle",
        marginTop: "-10px",
    };

    const handleKeyPress = (event) => {
        if (lettersOnly) {
            const key = String.fromCharCode(event.which);
            const regex = /^[a-zA-Z]+$/;
            if (!regex.test(key)) {
                event.preventDefault(); // Prevent typing symbols and numbers
            }
        }
    };

    return (
        <Form.Group className="m-3" controlId={controlId}>
            <div style={labelStyles}>
                <div style={iconStyles}>{children}</div>
                <Form.Label style={labelStyles}>{label}</Form.Label>
            </div>
            <Form.Control
                type={type}
                placeholder={placeholder}
                onKeyPress={handleKeyPress}
            />
            <Form.Text className="text-muted">{text}</Form.Text>
        </Form.Group>
    );
};

AuthInput.propTypes = {
    controlId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.element.isRequired,
    lettersOnly: PropTypes.bool,
};

AuthInput.defaultProps = {
    lettersOnly: false,
};

export default AuthInput;
