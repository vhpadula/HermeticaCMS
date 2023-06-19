import 'bootstrap/dist/css/bootstrap.min.css';
import BottomBar from './../UI/organisms/BottomBar';

export default function HomePage() {
  const pageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
  };

  const backgroundStyle = {
    position: 'absolute',
    width: '100%',
    height: '50%',
    bottom: '50%',
    zIndex: '-1',
  };

  const overlayStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '1',
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <BottomBar />
      </div>

      <div style={backgroundStyle}></div>
    </div>
  );
}
