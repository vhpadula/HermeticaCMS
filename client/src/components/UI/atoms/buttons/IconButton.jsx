import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function IconButton({
    children,
    text,
    variant = "primary",
    textColor,
    width,
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
            <div style={{ marginRight: "10%", width: `${width * 2.5}vw` }}>
                {children}
            </div>

            <span style={{ color: textColor, fontSize: `${width}vw` }}>
                {text}
            </span>
        </Button>
    );
}

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.number.isRequired,
};
