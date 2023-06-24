import { Container, Row } from "react-bootstrap";
import UpperBar from "../../UI/organisms/UpperBar";
import AppTitle from "../../UI/atoms/text/AppTitle";
import LoginForm from "../../UI/organisms/LoginForm";
import "./../pageStyles.css";

export default function LoginPage() {
    return (
        <div className="pageStyle">
            <Container
                fluid
                className="d-flex flex-column justify-content-center" // Add align-items-stretch to stretch vertically
                style={{
                    padding: 0,
                    gap: "5vw",
                }}
            >
                <Row>
                    <UpperBar showButton={false} />
                </Row>
                <Container className="d-flex flex-column align-items-center">
                    <Row>
                        <AppTitle fontSize="8.5vw" color={true} />
                    </Row>
                </Container>
                <Container
                    fluid
                    style={{
                        paddingRight: "20%",
                        paddingLeft: "20%",
                        paddingBottom: "15%",
                        maxWidth: "85vw",
                    }}
                >
                    <LoginForm />
                </Container>
            </Container>
        </div>
    );
}
