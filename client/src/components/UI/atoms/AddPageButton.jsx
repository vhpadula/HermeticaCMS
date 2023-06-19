import { Button } from 'react-bootstrap';
import { primaryColor } from './../../../colors';
import FilePlusIcon from './../../../assets/icons/filePlusIcon'; // Update the path based on your file location

export default function AddPageButton() {
  const buttonStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    width: '135px',
    height: '42px',
    borderRadius: '5px',
    borderColor: primaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    lineHeight:'18.75px',
    fontSize: '16px', 
  };

  return (
    <Button style={buttonStyle}>
      <FilePlusIcon />
      <span>Add Page</span>
    </Button>
  );
}



