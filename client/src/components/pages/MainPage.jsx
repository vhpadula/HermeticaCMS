import { Container } from "react-bootstrap";
import UpperBar from "..//UI/organisms/UpperBar";
import "./pageStyles.css";
import MainPageNav from "../UI/organisms/MainPageNav";

export default function MainPage() {
    return (
        <div className="pageStyle">
            <Container
                fluid
                className="d-flex flex-column justify-content-center" // Add align-items-stretch to stretch vertically
                style={{
                    padding: 0,
                }}
            >
                <UpperBar loggedIn={true} showTitle={true} />
            </Container>
            <Container
                fluid
                className=""
                style={{
                    height: "100%",
                    padding: 0,
                }}
            >
                <MainPageNav />
            </Container>
        </div>
    );
}
