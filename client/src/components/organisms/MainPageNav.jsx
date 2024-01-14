import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import IconButton from "../atoms/buttons/IconButton";
import OpenBookIcon from "../../../assets/icons/OpenBookIcon";
import PagesIcon from "../../../assets/icons/PageIcon";
import ImageIcon from "../../../assets/icons/ImageIcon";
import UsersIcon from "../../../assets/icons/UsersIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import { Link } from "react-router-dom";

import CustomNavLink from "./../molecules/CustomNavLink";
export default function MainPageNav() {
    const navWidth = 1.5;
    const location = useLocation(); // Get the current location using useLocation hook

    // Define an object with the paths and their corresponding pill names
    const pathToPillMap = {
        "/main/pages": "Pages",
        "/main/images": "Images",
        "/main/authors": "Authors",
        "/main/siteConfigurations": "Website Settings",
    };

    // Get the active pill based on the current location
    const getActivePill = () => {
        const currentPath = location.pathname;
        return Object.keys(pathToPillMap).find((path) =>
            currentPath.startsWith(path)
        );
    };

    const activePill = getActivePill();

    return (
        <div data-bs-theme="custom" style={{ height: "100vh" }}>
            <Navbar
                bg="backgroundPink"
                className="me-auto flex-column h-100"
                style={{ width: "20vw" }}
            >
                <Container className="me-auto flex-column ">
                    <div className="m-3">
                        <Link to="/Website">
                            <IconButton
                                text="Go to Website"
                                variant="light"
                                textColor="var(--primary-color)"
                                width={1.5}
                            >
                                <OpenBookIcon />
                            </IconButton>
                        </Link>
                    </div>

                    <Nav className="flex-column text-center " variant="pills">
                        <Navbar.Brand style={{ fontSize: "2vw" }}>
                            Author Area
                        </Navbar.Brand>

                        <CustomNavLink
                            href="/main/pages"
                            text="Pages"
                            width={navWidth}
                            active={activePill === "/main/pages"} // Set active prop based on the current location
                        >
                            <PagesIcon />
                        </CustomNavLink>

                        <CustomNavLink
                            href="/main/images"
                            text="Images"
                            width={navWidth}
                            active={activePill === "/main/images"} // Set active prop based on the current location
                        >
                            <ImageIcon />
                        </CustomNavLink>

                        <Navbar.Brand style={{ fontSize: "2vw" }}>
                            Admin Area
                        </Navbar.Brand>

                        <CustomNavLink
                            href="/main/authors"
                            text="Authors"
                            width={navWidth}
                            active={activePill === "/main/authors"} // Set active prop based on the current location
                        >
                            <UsersIcon />
                        </CustomNavLink>

                        <CustomNavLink
                            href="/main/siteConfigurations"
                            text="Website Settings"
                            width={navWidth}
                            active={activePill === "/main/siteConfigurations"} // Set active prop based on the current location
                        >
                            <SettingsIcon />
                        </CustomNavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
