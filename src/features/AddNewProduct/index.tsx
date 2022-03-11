import React, { useEffect, useState } from 'react';

//Types
import { ButtonText, ButtonVariant } from '../../constants/enum/button';
import { InputLabel, SelectLabel, InputType, InputId, InputMessage } from '../../constants/enum/input-select';
import { Brand, Product } from '../../helpers/interface';
import { Type } from '../../constants/enum/type-modal';

//Components
import InputField from '../../components/Input';
import Select from '../../components/Select';
import ButtonPage from '../../components/Button'
import { Form } from 'react-bootstrap';

export interface ModalProps {
  type: Type;
  brand: Brand[];
  onResult: (result: Product[]) => void;
  defaultValue?: Product;
  listProducts?: Product[];
}

const AddNewProduct = ({ type = Type.EDIT, brand, defaultValue, listProducts, onResult }: ModalProps) => {
  const defaultField = {
    name: '',
    price: 0,
    brandId: 1,
  };

  const [validated, setValidated] = useState(false);
  const [valueForm, setValueForm] = useState<Product>(defaultField);

  useEffect(() => {
    if (!!defaultValue) {
      setValueForm(defaultValue);
    } else {
      setValueForm(defaultField);
    }
  }, [defaultValue]);

  const handleChangeBrandName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    setValueForm((prev) => ({
      ...prev,
      brandId: parseInt(value),
    }));
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValueForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = (listProducts: Product[], data: Product) => {
    return [...listProducts, data];
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    if (type === Type.ADD) {
      const newProducts = !!listProducts
        ? handleAddProduct(listProducts, { ...valueForm, id: listProducts.length + 1 })
        : [];
      onResult(newProducts);
      setValueForm(defaultField);
      return;
    } else {

    }
  }

  return (
    <Form onSubmit={handleSubmit} validated={validated} noValidate>
      <Select
        labelName={SelectLabel.BRAND}
        brands={brand}
        onChange={handleChangeBrandName}
        defaultValue={valueForm.brandId}
      />
      <InputField
        type={InputType.TEXT}
        labelName={InputLabel.PRODUCTS_NAME}
        placeholder={InputLabel.PRODUCTS_NAME}
        name={InputType.NAME}
        controlId={InputId.CONTROL_PRODUCT}
        errorMessage={InputMessage.PRODUCT_INVALID}
        onChange={handleChangeInput}
        value={valueForm.name}
      />
      <InputField
        type={InputType.PRICE}
        labelName={InputLabel.PRICE}
        placeholder={InputType.NUMBER}
        name={InputType.PRICE}
        controlId={InputId.CONTROL_PRICE}
        errorMessage={InputMessage.PRICE_INVALID}
        onChange={handleChangeInput}
        value={valueForm.price}
      />
      <ButtonPage
        extraClass='mx-1'
        variant={ButtonVariant.PRIMARY}
        text={type === Type.ADD
          ? ButtonText.ADD_PRODUCTS
          : ButtonText.EDIT_PRODUCTS}
      />
    </Form>
  )
};

export default React.memo(AddNewProduct);
