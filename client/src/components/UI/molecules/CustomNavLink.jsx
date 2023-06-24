import PropTypes from "prop-types";
import { Nav } from "react-bootstrap"; // Replace 'your-library' with the appropriate library you're using

const CustomNavLink = ({ href, text, children }) => {
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
            {children}
            <span>{text}</span>
        </Nav.Link>
    );
};

CustomNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CustomNavLink;
