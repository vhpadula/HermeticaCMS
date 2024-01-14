import PropTypes from "prop-types";
import "./textStyles.css";

function AppTitle({ fontSize, color }) {
    const titleStyle = {
        fontSize: fontSize,
    };

    const hermeticaStyle = {
        fontSize: fontSize,
        color: color ? "var(--primary-color)" : "var(--true-white)",
    };

    return (
        <div>
            <span className="titleStyle" style={hermeticaStyle}>
                Hermetica
            </span>
            <span className="cmsStyle" style={titleStyle}>
                CMS
            </span>
        </div>
    );
}

AppTitle.propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.bool,
};

AppTitle.defaultProps = {
    color: false,
};

export default AppTitle;
