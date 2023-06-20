import Button from "react-bootstrap/Button";

export default function AboutButton() {
    const buttonStyleText = {
        fontFamily: "sans-serif",
        color: "var(--true-white)",
        fontWeight: 400,
        fontSize: "2.5vw",
        textDecoration: "none",
    };

    return (
        <Button variant="link" style={buttonStyleText}>
            About
        </Button>
    );
}
