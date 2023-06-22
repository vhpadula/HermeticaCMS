import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const AuthInput = ({ controlId, type, placeholder, label, text, children }) => {
    const labelStyles = {
        color: "var(--secondary-color)",
        fontSize: "inherit", // Inherit the font size from the parent
        display: "flex",
        alignItems: "center",
    };

    const iconStyles = {
        marginRight: "5px",
        height: "inherit", // Inherit the font size from the parent
        verticalAlign: "middle",
        marginTop: "-10px", // Adjust this value as needed for precise alignment
    };

    return (
        <Form.Group className="m-3" controlId={controlId}>
            <div style={labelStyles}>
                <div style={iconStyles}>{children}</div>
                <Form.Label style={labelStyles}>{label}</Form.Label>
            </div>
            <Form.Control type={type} placeholder={placeholder} />
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
};

export default AuthInput;
