import { Container } from "react-bootstrap";
import ColorButton from "../atoms/buttons/ColorButton";

export default function ImagesHeader() {
    return (
        <div>
            <Container
                className="text-nowrap mt-4 mb-4"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <ColorButton
                    variant="outline-primary"
                    text="Upload Image"
                    size="md"
                />
            </Container>
        </div>
    );
}
