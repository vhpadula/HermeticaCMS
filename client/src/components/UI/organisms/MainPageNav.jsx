import { Navbar, Container, Nav } from "react-bootstrap";
import IconButton from "../atoms/buttons/IconButton";
import OpenBookIcon from "../../../assets/icons/OpenBookIcon";
import PagesIcon from "../../../assets/icons/PageIcon";
import ImageIcon from "../../../assets/icons/ImageIcon";
import UsersIcon from "../../../assets/icons/UsersIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import CustomNavLink from "./../molecules/CustomNavLink"; // Import the CustomNavLink component

export default function MainPageNav() {
    const navWidth = 1.5;
    return (
        <div data-bs-theme="custom" style={{ height: "100vh" }}>
            <Navbar
                bg="backgroundPink"
                className="me-auto flex-column h-100"
                style={{ width: "20vw" }}
            >
                <Container className="me-auto flex-column ">
                    <div className="m-3">
                        <IconButton
                            text="Go to Website"
                            variant="light"
                            textColor="var(--primary-color)"
                            width={1.5}
                        >
                            <OpenBookIcon />
                        </IconButton>
                    </div>

                    <Nav
                        defaultActiveKey="#pages"
                        className="flex-column text-center "
                        variant="pills"
                    >
                        <Navbar.Brand style={{ fontSize: "2vw" }}>
                            Author Area
                        </Navbar.Brand>

                        <CustomNavLink
                            href="#pages"
                            text="Pages"
                            width={navWidth}
                        >
                            <PagesIcon />
                        </CustomNavLink>

                        <CustomNavLink
                            href="#images"
                            text="Images"
                            width={navWidth}
                        >
                            <ImageIcon />
                        </CustomNavLink>

                        <Navbar.Brand style={{ fontSize: "2vw" }}>
                            Admin Area
                        </Navbar.Brand>

                        <CustomNavLink
                            href="#authors"
                            text="Authors"
                            width={navWidth}
                        >
                            <UsersIcon />
                        </CustomNavLink>

                        <CustomNavLink
                            href="#siteConfigurations"
                            text="Website Settings"
                            width={navWidth}
                        >
                            <SettingsIcon />
                        </CustomNavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
