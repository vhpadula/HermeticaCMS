import PropTypes from "prop-types";
import Rectangle from "../atoms/Rectangle";
import TransparentLoginButton from "../molecules/buttons/TransparentLoginButton";
import AppLogo from "../molecules/AppLogo";
import { Image } from "react-bootstrap";
import userPlaceholder from "./../../../assets/pictures/userPlaceholder.jpg";
import { Link } from "react-router-dom";
export default function UpperBar({ showButton, loggedIn, showTitle }) {
    return (
        <div>
            <Rectangle width="100%" height="7.5vw" color="var(--primary-color)">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 20px",
                        height: "100%",
                    }}
                >
                    <Link to="/">
                        <AppLogo width={3.5} />
                    </Link>

                    {showTitle && (
                        <h1
                            className="p-2"
                            style={{
                                textAlign: "center",
                                color: "var(--true-white)",
                                whiteSpace: "nowrap", // Prevent line breaks
                                overflow: "hidden", // Hide overflow text if needed
                                textOverflow: "ellipsis", // Add ellipsis (...) if text overflows
                                maxWidth: "70vw", // Adjust the maxWidth
                            }}
                        >
                            PageTitle
                        </h1>
                    )}
                    {loggedIn ? (
                        <div>
                            <Image
                                src={userPlaceholder}
                                roundedCircle
                                fluid
                                className="p-2"
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "7.5vw", // Adjust the maxWidth accordingly
                                }}
                            />
                        </div>
                    ) : (
                        showButton && <TransparentLoginButton />
                    )}
                </div>
            </Rectangle>
        </div>
    );
}

UpperBar.propTypes = {
    showButton: PropTypes.bool,
    loggedIn: PropTypes.bool,
    showTitle: PropTypes.bool, // Add prop type validation for showTitle
};

UpperBar.defaultProps = {
    showButton: true,
    loggedIn: false,
    showTitle: false, // Set the default value for showTitle
};
