import React from 'react';

// Bootstrap
import { Form } from 'react-bootstrap';

// Type
import {Brand, Product} from '../../helpers/interface'

interface Props {
  labelName: string;
  brands: Brand[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  defaultValue?: string | number;
}

const Select = ({labelName, brands, onChange, defaultValue}: Props) => (
  <Form.Group className="mb-3">
    <Form.Label>{labelName}</Form.Label>
    <Form.Select onChange={onChange} defaultValue={defaultValue}>
      {brands.map(({id, name}) => (
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export default React.memo(Select);