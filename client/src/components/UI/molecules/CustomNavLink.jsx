import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

const CustomNavLink = ({ href, text, width, children, active }) => {
    return (
        <Nav.Item>
            <Nav.Link
                href={href}
                active={active}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                }}
            >
                <div style={{ marginRight: "5px", width: `${width * 1.25}vw` }}>
                    {children}
                </div>
                <span style={{ fontSize: `${width}vw` }}>{text}</span>
            </Nav.Link>
        </Nav.Item>
    );
};

CustomNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool, // Add the 'active' prop
};

export default CustomNavLink;
