import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LockIcon from "../../../assets/icons/LockIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import AuthInput from "../molecules/AuthInput";
import ColorButton from "../atoms/buttons/ColorButton";
import { Link } from "react-router-dom";
function RegisterForm() {
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
                                controlId="registerEmail"
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
                                controlId="registerPassword"
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
                            <AuthInput
                                controlId="registerConfirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                label="Confirm Password"
                            >
                                <LockIcon />
                            </AuthInput>
                        </Col>
                    </Row>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "3%",
                        }}
                    >
                        <Link to="/auth/registerProfile" className="w-75">
                            <ColorButton className="w-100" text="Register" />
                        </Link>
                    </div>
                </div>
            </Container>
        </Form>
    );
}

export default RegisterForm;
