import Button from "react-bootstrap/Button";

export default function AboutButton() {
    const buttonStyleText = {
        fontFamily: "sans-serif",
        color: "var(--true-white)",
        fontWeight: 400,
        textDecoration: "none",
    };

    return (
        <Button variant="link" size="lg" style={buttonStyleText}>
            About
        </Button>
    );
}
