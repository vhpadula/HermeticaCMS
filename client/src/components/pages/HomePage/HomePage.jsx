import "./homePageStyles.css";
import BottomBar from "../../UI/organisms/BottomBar";
import AboutButton from "../../UI/atoms/buttons/AboutButton";
import HomePageBackground from "../../../assets/icons/HomePageBackground";
import HomePageContent from "../../UI/organisms/HomePageContent";
import TransparentLoginButton from "../../UI/molecules/buttons/TransparentLoginButton";
import { Col, Container, Row } from "react-bootstrap";

export default function HomePage() {
    return (
        <div>
            <div className="pageStyle">
                <div className="backgroundStyle">
                    <HomePageBackground />
                </div>
                <div className="overlayStyle">
                    <Container className=" mt-3 d-flex justify-content-end">
                        <Row>
                            <Col>
                                <AboutButton />
                            </Col>
                            <Col>
                                <TransparentLoginButton />
                            </Col>
                        </Row>
                    </Container>
                    <div className="buttonContainer"></div>

                    <div className="contentContainer">
                        <HomePageContent />
                    </div>
                    <div className="bottomBarContainer">
                        <BottomBar />
                    </div>
                </div>
            </div>
        </div>
    );
}
