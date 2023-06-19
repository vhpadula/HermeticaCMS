import './../../../styles.css'; // Replace 'styles.css' with the actual filename and path of your stylesheet
import { Button } from 'react-bootstrap';

export default function LoginButton() {
  return (
    <Button className="buttonStyle.transparent">
      <span>Login</span>
    </Button>
  );
}
