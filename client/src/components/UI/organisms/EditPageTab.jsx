import { Container } from "react-bootstrap";
import EditPageHeader from "../molecules/EditPageHeader";
import EditPageCard from "./EditPageCard";
export default function EditPageTab() {
    return (
        <Container
            style={{
                width: "75%",
                justifyContent: "center",
                padding: 0,
                margin: "5px",
            }}
        >
            <EditPageHeader />

            <Container
                style={{
                    width: "90%",
                    justifyContent: "center",
                    padding: 0,
                    marginTop: "10px",
                }}
            >
                <EditPageCard />
                <EditPageCard />
            </Container>
        </Container>
    );
}
