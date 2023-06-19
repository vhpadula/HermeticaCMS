import { Button } from 'react-bootstrap';
import FilePlusIcon from './../../../assets/icons/filePlusIcon';
import './../../../styles.css';

export default function AddPageButton() {
  return (
    <Button className="buttonStyle.mediumSmall">
      <FilePlusIcon />
      <span>Add Page</span>
    </Button>
  );
}