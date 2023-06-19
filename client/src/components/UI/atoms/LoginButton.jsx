import { Button } from 'react-bootstrap';
import {transparent, trueWhite } from './../../../colors';


export default function LoginButton() {
  const buttonStyle = {
    backgroundColor: transparent,
    color: trueWhite,
    width: '109px',
    height: '43px',
    borderRadius: '5px',
    borderSize: '2px',
    borderColor: trueWhite,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    lineHeight:'23.44px',
    fontSize: '20px', 
  };

  return (
    <Button style={buttonStyle}>
      <span>Login</span>
    </Button>
  );
}
