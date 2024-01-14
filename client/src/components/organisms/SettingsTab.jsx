import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LockIcon from "../../../assets/icons/LockIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import AuthInput from "../molecules/AuthInput";
import ColorButton from "../atoms/buttons/ColorButton";
function SettingsTab() {
    return (
        <Form className="d-flex w-100 justify-content-center align-items-center">
            <Container fluid>
                <div
                    className="mt-3"
                    style={{
                        border: "1px solid grey",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    <Row>
                        <Col>
                            <AuthInput
                                controlId="newURL"
                                type="text"
                                placeholder="URL"
                                label="URL"
                                lettersOnly={true}
                            >
                                <MailIcon />
                            </AuthInput>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <AuthInput
                                controlId="newWebName"
                                type="text"
                                placeholder="Website Name"
                                label="WebsiteName"
                            >
                                <LockIcon />
                            </AuthInput>
                        </Col>
                    </Row>

                    <Row className="m-3" style={{ gap: "20px" }}>
                        <Col>
                            <ColorButton
                                className="w-100"
                                text="Submit Changes"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Form>
    );
}

export default SettingsTab;
