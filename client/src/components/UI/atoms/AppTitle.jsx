import PropTypes from 'prop-types';
import { trueWhite, accentColor } from '../../../colors';

function AppTitle({ fontSize, lineHeight }) {
  const titleStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: fontSize || '100px',
    lineHeight: lineHeight || '117px',
    color: trueWhite,
  };

  const cmsStyle = {
    color: accentColor
  };

  const mergedStyle = { ...titleStyle, ...cmsStyle };

  return (
    <div>
      <span style={titleStyle}>Hermetica</span>
      <span style={mergedStyle}>CMS</span>
    </div>
  );
}

AppTitle.propTypes = {
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
};

export default AppTitle;
