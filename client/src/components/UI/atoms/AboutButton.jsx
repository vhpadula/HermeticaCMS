import Button from 'react-bootstrap/Button';
import { trueWhite } from './../../../colors';

export default function AboutButton() {

const buttonStyle = {
    fontFamily: 'Roboto, sans-serif',
    color: trueWhite,
    fontWeight: 400,
    lineHeight:'23.44px',
    fontSize: '20px', 
  };

  return (
    <Button variant="link" style = {buttonStyle}>About</Button>
  );
}


