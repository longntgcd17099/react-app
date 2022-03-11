import React from 'react';

//Types
import { Product } from '../../helpers/interface';
import { ButtonText, ButtonVariant } from '../../constants/enum/button';

//Components 
import ButtonPage from '../Button'

interface Props {
  product: Product;
  onEditProduct?: () => void;
}

const ListingRow = ({ product: { name, brandName, price }, onEditProduct }: Props) => {
  return (
    <tr className="list-order">
      <td className="fw-bold col-3" scope="row">
        {brandName}
      </td>
      <td className="col-3">{name}</td>
      <td className="col-3">{price + ' $'}</td>
      <td className="col-3">
      <ButtonPage
          extraClass='mx-1'
          variant={ButtonVariant.DANGER}
          text={ButtonText.DELETE}
        />
        <ButtonPage
          extraClass='mx-1'
          variant={ButtonVariant.WARNING}
          text={ButtonText.EDIT_PRODUCTS}
          onClick={onEditProduct}
        />
      </td>
    </tr>
  );
};

export default React.memo(ListingRow);
