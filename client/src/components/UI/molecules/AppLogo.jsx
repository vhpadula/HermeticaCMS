import PropTypes from "prop-types";
import AppTitle from "./../atoms/AppTitle";
import IbisLogo from "../../../assets/icons/ibisLogo";

const AppLogo = ({scale=1}) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    transform: `scale(${scale})`,
    transformOrigin: "center",
  };

  return (
    <div style={containerStyle}>
        <div style={{ marginRight: "33px" }}>
        <IbisLogo/>
        </div>
      
      <AppTitle />
    </div>
  );
};

AppLogo.propTypes = {
  scale: PropTypes.number,
};

export default AppLogo;
