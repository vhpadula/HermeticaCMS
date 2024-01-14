import { Container, Col } from "react-bootstrap";
import Rectangle from "../atoms/Rectangle";
import UserDisplay from "../molecules/UserDisplay";
import OptionsIcon from "../../../assets/icons/OptionsIcon";
import PropTypes from "prop-types";
export default function AuthorCard({ author }) {
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
                <Col>
                    <UserDisplay author={author} />
                </Col>

                <OptionsIcon />
            </Container>
        </Rectangle>
    );
}

AuthorCard.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
