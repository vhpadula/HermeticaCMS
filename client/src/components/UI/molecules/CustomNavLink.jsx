import PropTypes from "prop-types";
import { Nav } from "react-bootstrap"; // Replace 'your-library' with the appropriate library you're using

const CustomNavLink = ({ href, text, width, children }) => {
    return (
        <Nav.Link
            href={href}
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
    );
};

CustomNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default CustomNavLink;
