import { Container, Col } from "react-bootstrap";
import IconButton from "../atoms/buttons/IconButton";
import SaveIcon from "../../../assets/icons/SaveIcon";
import ClockIcon from "../../../assets/icons/ClockIcon";
import PenIcon from "../../../assets/icons/PenIcon";
import PlusCircleIcon from "../../../assets/icons/CirclePlusIcon";

export default function EditPageHeader({ createCard }) {
    const handleAddBlockClick = () => {
        createCard(); // Call the createCard function passed as a prop
    };

    return (
        <Container>
            <Container
                className="d-flex align-items-center p-2"
                style={{ gap: "5%" }}
            >
                <Col>
                    <div className="m-3">
                        <IconButton
                            text="Add Block"
                            variant="secondary"
                            textColor="var(--true-white)"
                            width={1.2}
                            onClick={handleAddBlockClick} // Add onClick event handler
                        >
                            <PlusCircleIcon />
                        </IconButton>
                    </div>
                </Col>
                <Col>
                    <IconButton text="Save Draft" width={1}>
                        <SaveIcon />
                    </IconButton>
                </Col>
                <Col>
                    <IconButton text="Schedule Page" width={1}>
                        <ClockIcon />
                    </IconButton>
                </Col>
                <Col>
                    <IconButton text="Publish Page" width={1}>
                        <PenIcon />
                    </IconButton>
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
