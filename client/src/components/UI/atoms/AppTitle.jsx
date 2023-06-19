import PropTypes from 'prop-types';

function AppTitle({ fontSize, lineHeight }) {
  const titleStyle = {
    fontSize: fontSize,
    lineHeight: lineHeight,
  };

  return (
    <div>
      <span className="titleStyle" style={titleStyle}>Hermetica</span>
      <span className="cmsStyle" style={titleStyle}>CMS</span>
    </div>
  );
}

AppTitle.propTypes = {
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
};

export default AppTitle;
