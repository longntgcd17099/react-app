import React from 'react';

//Bootstrap
import { Modal as ModalBootsrap } from 'react-bootstrap';

//Types
import { ButtonText } from '../../constants/enum/button';
import { Brand, Product } from '../../helpers/interface';
import { Type } from '../../constants/enum/type-modal';

//Components
import AddNewProduct from '../../features/AddNewProduct';

export interface ModalProps {
  isVisible: boolean;
  type: Type;
  brand: Brand[];
  onHide?: () => void;
  onResult: (product: Product[]) => void;
  listProducts?: Product[];
  defaultValue?: Product
}

const Modal = ({
  isVisible = false,
  onHide,
  type = Type.EDIT,
  brand,
  onResult,
  listProducts,
  defaultValue }: ModalProps
) => {

  return (
    <ModalBootsrap
      show={isVisible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <ModalBootsrap.Header closeButton>
        <ModalBootsrap.Title id="contained-modal-title-vcenter">
          {type === Type.ADD
            ? ButtonText.ADD_PRODUCTS
            : ButtonText.EDIT_PRODUCTS}
        </ModalBootsrap.Title>
      </ModalBootsrap.Header>
      <ModalBootsrap.Body>
        <AddNewProduct
          type={Type.ADD}
          brand={brand}
          onResult={onResult}
          listProducts={listProducts}
          defaultValue={defaultValue}
        />
      </ModalBootsrap.Body>
    </ModalBootsrap>
  )
};

export default React.memo(Modal);
