import { Container, Dropdown, Form } from "react-bootstrap";
import Rectangle from "../atoms/Rectangle";
import GridIcon from "../../../assets/icons/GridIcon";
import { useEffect, useState } from "react";
import IconButton from "../atoms/buttons/IconButton";
import EditIcon from "../../../assets/icons/EditIcon";
import CheckmarkIcon from "../../../assets/icons/CheckmarkIcon";
import PropTypes from "prop-types";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import DeleteIcon from "../../../assets/icons/DeleteIcon";

export default function EditPageCard({
    cardId,
    initialPosition,
    updateCardPosition,
    deleteCard,
}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [contentType, setContentType] = useState(null);
    const [rectangleHeight, setRectangleHeight] = useState("10vw");
    const [editMode, setEditMode] = useState(false); // New state variable
    const [position, setPosition] = useState(initialPosition);
    const [contentValue, setContentValue] = useState(""); // State for form content value

    const handleDeleteClick = () => {
        deleteCard(cardId); // Call the deleteCard function with the cardId
    };

    const handleUpClick = () => {
        setPosition((prevPosition) => prevPosition - 1); // Decrement position
        updateCardPosition(cardId, position - 1, position); // Call the updateCardPosition function with the new position
    };

    const handleDownClick = () => {
        setPosition((prevPosition) => prevPosition + 1); // Increment position
        updateCardPosition(cardId, position + 1, position); // Call the updateCardPosition function with the new position
    };

    useEffect(() => {
        const updateRectangleHeight = () => {
            if (contentType === "header") {
                setRectangleHeight("10vw");
            } else if (contentType === "paragraph") {
                setRectangleHeight("20vw");
            } else if (contentType === "image") {
                setRectangleHeight("15vw");
            } else {
                setRectangleHeight("10vw");
            }
        };

        updateRectangleHeight();
    }, [contentType]);

    useEffect(() => {
        if (editMode) {
            setSelectedOption(null);
        }
    }, [editMode]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setContentType(option.toLowerCase());
    };

    const handleContentChange = (e) => {
        setContentValue(e.target.value);
    };

    const previewStyle = {
        width: "70%",
        maxHeight: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginRight: "20px",
        marginLeft: "20px",
        fontSize: "16px",
    };

    let previewComponent;

    if (editMode) {
        if (contentType === "header") {
            previewComponent = (
                <Form style={previewStyle}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter content:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            value={contentValue} // Set the value of the textarea to the contentValue state
                            onChange={handleContentChange} // Handle changes in the contentValue state
                        />
                    </Form.Group>
                </Form>
            );
        } else if (contentType === "image") {
            previewComponent = (
                <Form style={previewStyle}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select an image:</Form.Label>
                        <Form.Control as="select">
                            <option>Image 1</option>
                            <option>Image 2</option>
                            <option>Image 3</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            );
        } else {
            previewComponent = (
                <Form style={previewStyle}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter content:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={contentValue} // Set the value of the textarea to the contentValue state
                            onChange={handleContentChange} // Handle changes in the contentValue state
                        />
                    </Form.Group>
                </Form>
            );
        }
    } else {
        if (contentType === "header") {
            previewComponent = (
                <h1 style={previewStyle}>{contentValue}</h1> // Use the contentValue state for header preview
            );
        } else if (contentType === "paragraph") {
            previewComponent = (
                <p style={previewStyle}>{contentValue}</p> // Use the contentValue state for paragraph preview
            );
        } else if (contentType === "image") {
            previewComponent = (
                <img style={previewStyle} src="image_url" alt="Image preview" />
            );
        }
    }

    const handleEditModeToggle = () => {
        setEditMode((prevEditMode) => !prevEditMode);
        setSelectedOption(
            contentType.charAt(0).toUpperCase() + contentType.slice(1)
        );
    };

    return (
        <Rectangle
            width="100%"
            height={rectangleHeight}
            color="var(--background-pink)"
        >
            <Container
                className="mt-2"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div style={{ marginRight: "10px" }}>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={handleUpClick}
                        >
                            <ArrowUpIcon />
                        </div>
                        <GridIcon />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={handleDownClick}
                        >
                            <ArrowDownIcon />
                        </div>
                    </div>
                </div>

                {!editMode && (
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="light"
                                id="dropdown-basic"
                            >
                                {selectedOption || "Content"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => handleOptionChange("Header")}
                                >
                                    Header
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() =>
                                        handleOptionChange("Paragraph")
                                    }
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
                    </div>
                )}

                {previewComponent}
                <div
                    style={{
                        height: "24px",
                        display: "flex",
                    }}
                >
                    {contentType && (
                        <IconButton
                            variant="light"
                            width={1}
                            onClick={handleEditModeToggle}
                        >
                            {editMode ? <CheckmarkIcon /> : <EditIcon />}
                        </IconButton>
                    )}

                    {!editMode && (
                        <IconButton
                            variant="outline-accent"
                            width={1}
                            onClick={handleDeleteClick}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </div>
            </Container>
        </Rectangle>
    );
}

EditPageCard.propTypes = {
    cardId: PropTypes.number,
    initialPosition: PropTypes.number,
    updateCardPosition: PropTypes.func,
    deleteCard: PropTypes.func,
};
