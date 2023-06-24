import { Navbar, Container, Nav } from "react-bootstrap";
import IconButton from "../atoms/buttons/IconButton";
import OpenBookIcon from "../../../assets/icons/OpenBookIcon";
import PagesIcon from "../../../assets/icons/PageIcon";
import ImageIcon from "../../../assets/icons/ImageIcon";
import UsersIcon from "../../../assets/icons/UsersIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import CustomNavLink from "./../molecules/CustomNavLink"; // Import the CustomNavLink component

export default function MainPageNav() {
    return (
        <div data-bs-theme="custom" style={{ height: "100%" }}>
            <Navbar
                bg="backgroundPink"
                className="me-auto flex-column"
                style={{ width: "32vw", height: "100%" }}
            >
                <Container className="me-auto flex-column ">
                    <div className="mb-3 mt-3">
                        <IconButton
                            text="Go to Website"
                            variant="light"
                            textColor="var(--primary-color)"
                        >
                            <OpenBookIcon />
                        </IconButton>
                    </div>

                    <Nav
                        defaultActiveKey="#pages"
                        className="flex-column text-center "
                        variant="pills"
                    >
                        <Navbar.Brand>Author Area</Navbar.Brand>

                        <CustomNavLink href="#pages" text="Pages">
                            <PagesIcon />
                        </CustomNavLink>

                        <CustomNavLink href="#images" text="Images">
                            <ImageIcon />
                        </CustomNavLink>

                        <Navbar.Brand>Admin Area</Navbar.Brand>

                        <CustomNavLink href="#authors" text="Authors">
                            <UsersIcon />
                        </CustomNavLink>

                        <CustomNavLink
                            href="#siteConfigurations"
                            text="Website Settings"
                        >
                            <SettingsIcon />
                        </CustomNavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
