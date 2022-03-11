import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

interface Props {
  labelName: string;
  type: string;
  placeholder: string;
  name: string;
  controlId: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  errorMessage?: string;
}

const InputField = ({type, placeholder, name, labelName, controlId, errorMessage, onChange, value}: Props) => (
  <Form.Group className="mb-3" controlId={controlId}>
    <Form.Label>{labelName}</Form.Label>
    <InputGroup hasValidation>
      <Form.Control
        type={type}
        placeholder={placeholder}
        aria-describedby="inputGroupPrepend"
        required
        name={name}
        onChange={onChange}
        value={value}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
);

export default React.memo(InputField);