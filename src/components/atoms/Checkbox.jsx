import Form from "react-bootstrap/Form";

function Checkbox() {
    return (
        <Form>
            <div className="mt-3 mx-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                    <Form.Check.Input
                        type="checkbox"
                        isValid
                        className="custom-checkbox"
                        style={{ outline: "none", boxShadow: "none" }}
                    />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>
            </div>

            <style>
                {`
          .form-check-input[type='checkbox'] {
            border-color: var(--secondary-color);
          
            
          }

          .form-check-input[type='checkbox']:checked {
            background-color: var(--secondary-color);
            border-color: var(--secondary-color);
       
          }

          .form-check-input[type='checkbox']:not(:checked) + .form-check-label {
            color: var(--secondary-color);
           
          }
          

          .form-check-input[type='checkbox']:checked + .form-check-label {
            color: var(--secondary-color);
            
          }
        `}
            </style>
        </Form>
    );
}

export default Checkbox;
