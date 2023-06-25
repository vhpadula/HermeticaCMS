import { Container, Row, Col, Image } from "react-bootstrap";
import Rectangle from "../atoms/Rectangle";
import imagePlaceholder from "./../../../assets/pictures/imagePlaceholder.jpg";

import OptionsIcon from "../../../assets/icons/OptionsIcon";
import PropTypes from "prop-types";
export default function ImageCard({ title, publishedDate }) {
    return (
        <Rectangle width="100%" height="10vw" color="var(--background-pink)">
            <Container
                className="text-nowrap mt-2"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    gap: "1.5vw",
                }}
            >
                <Image
                    src={imagePlaceholder}
                    fluid
                    className="p-2"
                    style={{
                        maxHeight: "100%",
                        maxWidth: "10vw", // Adjust the maxWidth accordingly
                    }}
                />
                <Row>
                    <span
                        style={{
                            color: "var(--primary-color)",
                            fontWeight: "700",
                            fontSize: "3vw",
                        }}
                    >
                        {title}
                    </span>
                </Row>

                <Col>
                    <span
                        style={{
                            color: "var(--primary-color)",
                            fontSize: "2.5vw",
                        }}
                    >
                        {publishedDate}
                    </span>
                </Col>

                <OptionsIcon />
            </Container>
        </Rectangle>
    );
}

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
