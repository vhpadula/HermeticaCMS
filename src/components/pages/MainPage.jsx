import { Container } from "react-bootstrap";
import UpperBar from "../UI/organisms/UpperBar";
import "./pageStyles.css";
import MainPageNav from "../UI/organisms/MainPageNav";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <div className="pageStyle">
            <Container
                fluid
                className="d-flex flex-column justify-content-center"
                style={{ padding: 0 }}
            >
                <UpperBar loggedIn={true} showTitle={true} />
            </Container>
            <Container
                fluid
                className="d-flex"
                style={{ height: "100vh", padding: 0 }}
            >
                <MainPageNav />
                <Outlet />
            </Container>
        </div>
    );
}
