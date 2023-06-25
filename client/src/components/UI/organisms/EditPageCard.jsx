import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Rectangle from "../atoms/Rectangle";
import StatusDisplay from "../molecules/StatusDisplay";
import UserDisplay from "../molecules/UserDisplay";
import OptionsIcon from "../../../assets/icons/OptionsIcon";
import PropTypes from "prop-types";
import GridIcon from "../../../assets/icons/GridIcon";
import React from "react";
import IconButton from "../atoms/buttons/IconButton";
import EditIcon from "../../../assets/icons/EditIcon";

export default function EditPageCard({ title, status, publishedDate, author }) {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [contentType, setContentType] = React.useState("content");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setContentType(option.toLowerCase());
    };

    const previewStyle = {
        width: "10vw",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    };
    let previewComponent;

    if (contentType === "header") {
        previewComponent = (
            <h1 style={previewStyle}>This is a header preview</h1>
        );
    } else if (contentType === "paragraph") {
        previewComponent = (
            <p style={previewStyle}>
                This is a paragraph previewaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
        );
    } else if (contentType === "image") {
        previewComponent = (
            <img style={previewStyle} src="image_url" alt="Image preview" />
        );
    }

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
                <GridIcon />
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {selectedOption || "Content"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => handleOptionChange("Header")}
                            >
                                Header
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => handleOptionChange("Paragraph")}
                            >
                                Paragraph
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => handleOptionChange("Image")}
                            >
                                Image
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col>{previewComponent}</Col>
                <IconButton variant="light" width={1}>
                    <EditIcon />
                </IconButton>
            </Container>
        </Rectangle>
    );
}

EditPageCard.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
