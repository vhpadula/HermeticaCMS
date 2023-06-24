import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function StatusDisplay({ status }) {
    let statusStyle = {
        border: "2px solid",
        borderRadius: "20%/50%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        width: "10vw",
        fontSize: "1.5vw",
    };

    let statusText = "";

    switch (status) {
        case "published":
            statusStyle.borderColor = "var(--published-green)";
            statusStyle.color = "var(--published-green)";
            statusText = "Published";
            break;
        case "draft":
            statusStyle.borderColor = "var(--draft-red)";
            statusStyle.color = "var(--draft-red)";
            statusText = "Draft";
            break;
        case "scheduled":
            statusStyle.borderColor = "var(--scheduled-yellow)";
            statusStyle.color = "var(--scheduled-yellow)";
            statusText = "Scheduled";
            break;
        default:
            break;
    }

    return (
        <Container>
            <div style={statusStyle}>
                <span>{statusText}</span>
            </div>
        </Container>
    );
}

StatusDisplay.propTypes = {
    status: PropTypes.oneOf(["published", "draft", "scheduled"]).isRequired,
};
