import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LockIcon from "../../../assets/icons/LockIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import AuthInput from "../molecules/AuthInput";
import Checkbox from "../atoms/Checkbox";
import ColorButton from "../atoms/buttons/ColorButton";
import TransparentButton from "../atoms/buttons/TransparentButton";
import { Link } from "react-router-dom";
function LoginForm() {
    return (
        <Form>
            <Container fluid>
                <div
                    style={{
                        border: "1px solid grey",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    <Row>
                        <Col>
                            <AuthInput
                                controlId="loginEmail"
                                type="email"
                                placeholder="Enter email"
                                label="Email address"
                            >
                                <MailIcon />
                            </AuthInput>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <AuthInput
                                controlId="loginPassword"
                                type="password"
                                placeholder="Password"
                                label="Password"
                            >
                                <LockIcon />
                            </AuthInput>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Checkbox />
                        </Col>
                    </Row>

                    <Row className="m-3" style={{ gap: "20px" }}>
                        <Col>
                            <Link to="/auth/register">
                                <TransparentButton
                                    className="w-100"
                                    text="Register"
                                />
                            </Link>
                        </Col>

                        <Col>
                            <Link to="/main">
                                <ColorButton className="w-100" text="Login" />
                            </Link>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Button
                            variant="link"
                            style={{ color: "var(--secondary-color)" }}
                        >
                            Forgot Password?
                        </Button>
                    </Row>
                </div>
            </Container>
        </Form>
    );
}

export default LoginForm;
