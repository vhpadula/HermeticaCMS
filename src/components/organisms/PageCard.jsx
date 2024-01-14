import { Container, Row, Col } from "react-bootstrap";
import Rectangle from "../atoms/Rectangle";
import StatusDisplay from "../molecules/StatusDisplay";
import UserDisplay from "../molecules/UserDisplay";
import OptionsIcon from "../../../assets/icons/OptionsIcon";
import PropTypes from "prop-types";
export default function PageCard({ title, status, publishedDate, author }) {
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
                }}
            >
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
                    <span
                        style={{
                            color: "var(--dark-grey)",
                            fontSize: "2vw",
                        }}
                    >
                        {publishedDate}
                    </span>
                </Row>
                <Col>
                    <StatusDisplay status={status} />
                </Col>
                <Col>
                    <UserDisplay author={author} />
                </Col>

                <OptionsIcon />
            </Container>
        </Rectangle>
    );
}

PageCard.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
