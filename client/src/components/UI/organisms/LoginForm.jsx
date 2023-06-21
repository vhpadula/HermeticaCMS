import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LockIcon from "../../../assets/icons/LockIcon";

function LoginForm() {
    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="m-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                Well never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group
                            className="m-3"
                            controlId="formBasicPassword"
                        >
                            <LockIcon />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group
                            className="m-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="m-3 ">
                    <Col>
                        <Button variant="primary" size="lg" className="w-100 ">
                            Register
                        </Button>
                    </Col>

                    <Col>
                        <Button variant="primary" size="lg" className="w-100 ">
                            Login
                        </Button>
                    </Col>
                </Row>

                <Row className="m-3">
                    <Button variant="link">Forgot Password?</Button>
                </Row>
            </Container>
        </Form>
    );
}

export default LoginForm;
