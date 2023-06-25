import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthInput from "../molecules/AuthInput";
import ColorButton from "../atoms/buttons/ColorButton";
import PersonIcon from "../../../assets/icons/PersonIcon";
import HoverImage from "../atoms/HoverImage";
import userPlaceholder from "./../../../assets/pictures/userPlaceholder.jpg";
import { Link } from "react-router-dom";
function ProfileForm() {
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
                    <HoverImage src={userPlaceholder} text="Add Photo" />

                    <Row>
                        <Col>
                            <AuthInput
                                controlId="profileName"
                                type="text"
                                placeholder="Enter name"
                                label="Your Name"
                                lettersOnly={true}
                            >
                                <PersonIcon />
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
                        <Link to="/main">
                            <ColorButton
                                className="w-75"
                                text="Create Profile"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </Form>
    );
}

export default ProfileForm;
