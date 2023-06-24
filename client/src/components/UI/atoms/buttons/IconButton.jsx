import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function IconButton({
    children,
    text,
    variant = "primary",
    textColor,
}) {
    return (
        <Button
            className="text-nowrap"
            variant={variant}
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <div style={{ marginRight: "3px" }}>{children}</div>

            <span style={{ color: textColor }}>{text}</span>
        </Button>
    );
}

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
    textColor: PropTypes.string,
};
