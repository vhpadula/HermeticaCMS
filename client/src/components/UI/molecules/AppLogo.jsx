import PropTypes from "prop-types";
import AppTitle from "../atoms/text/AppTitle";
import IbisLogo from "../../../assets/icons/ibisLogo";

const AppLogo = ({ width }) => {
    const logoContainerStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    };

    const logoStyle = {
        width: width ? `${width}vw` : "16.5vw",
        marginRight: width ? `${width / 5}vw` : "3vw",
    };

    const titleFontSize = width ? `${width / 3}vw` : "6vw";

    return (
        <div style={logoContainerStyle}>
            <div style={logoStyle}>
                <IbisLogo />
            </div>
            <AppTitle fontSize={titleFontSize} />
        </div>
    );
};

AppLogo.propTypes = {
    width: PropTypes.string,
};

export default AppLogo;
