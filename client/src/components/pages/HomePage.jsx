import 'bootstrap/dist/css/bootstrap.min.css';
import BottomBar from './../UI/organisms/BottomBar';
import HomePageBackground from './../../assets/icons/HomePageBackground';
import './../../styles.css'; // Import the CSS file

export default function HomePage() {
  return (
    <div className="pageStyle"> 
      <div className="backgroundStyle"> 
        <HomePageBackground />
      </div>
      <div className="overlayStyle"> 
        <BottomBar />
      </div>
    </div>
  );
}
