import PropTypes from "prop-types";
import "./textStyles.css";

function AppTitle({ fontSize }) {
    const titleStyle = {
        fontSize: fontSize,
    };

    return (
        <div>
            <span className="titleStyle" style={titleStyle}>
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
};

export default AppTitle;
