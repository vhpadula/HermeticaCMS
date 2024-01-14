import { Container, Col } from "react-bootstrap";
import IconButton from "../atoms/buttons/IconButton";
import FilePlusIcon from "../../../assets/icons/FilePlusIcon";
import { Link } from "react-router-dom";

export default function PagesHeader() {
    const textStyle = {
        color: "var(--primary-color)",
        fontWeight: "700",
        fontSize: "2vw",
    };
    return (
        <Container>
            <Container
                className="d-flex align-items-center p-2"
                style={{ gap: "5%" }}
            >
                <Col>
                    <span style={textStyle}>Title</span>
                </Col>
                <Col>
                    <span style={textStyle}>Status</span>
                </Col>
                <Col>
                    <span style={textStyle}>Author</span>
                </Col>
                <Col>
                    <div className="m-3">
                        <Link to="/main/EditPage">
                            <IconButton
                                text="Add Page"
                                variant="primary"
                                textColor="var(--true-white)"
                                width={1.5}
                            >
                                <FilePlusIcon />
                            </IconButton>
                        </Link>
                    </div>
                </Col>
            </Container>
            <div
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--light-grey)",
                }}
            ></div>
        </Container>
    );
}
