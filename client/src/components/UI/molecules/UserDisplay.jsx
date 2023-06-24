import userPlaceholder from "./../../../assets/pictures/userPlaceholder.jpg";
import { Image, Container } from "react-bootstrap";

export default function UserDisplay() {
    return (
        <Container className="d-flex align-items-center">
            <Image
                src={userPlaceholder}
                roundedCircle
                fluid
                className="p-2"
                style={{
                    maxHeight: "100%",
                    maxWidth: "5vw", // Adjust the maxWidth accordingly
                }}
            />

            <span
                className="p-1"
                style={{
                    color: "var(--primary-color)",
                    fontSize: "calc(1vw + 1vh)",
                }}
            >
                User Name
            </span>
        </Container>
    );
}
