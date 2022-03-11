import React, { useCallback, useState } from 'react';

//Types
import { Brand, Product } from '../../helpers/interface';
import { ButtonText, ButtonVariant } from '../../constants/enum/button';
import { Type } from '../../constants/enum/type-modal';

//Components
import Listing from '../Listing';
import ButtonPage from '../Button';
import Modal from '../modal';

interface Props {
  tableHeader: string[];
  listProduct: Product[];
  listNameBrand: Brand[];
  onResult: (product: Product[]) => void;
}

const Layout = ({ tableHeader, listProduct, listNameBrand, onResult }: Props): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const [typeModal, setTypeModal] = useState<Type>(Type.ADD);
  const [defaultValue, setDefaultValue] = useState<Product | undefined>(undefined);

  const handleAddProduct = useCallback(() => {
    setVisible(true);
    setTypeModal(Type.ADD);
    setDefaultValue(undefined);
  }, [])

  const handleEditProduct = useCallback(() => {
    setVisible(true);
    setTypeModal(Type.EDIT);
  }, [])

  const closeModal = () => {
    setVisible(false)
  }

  return (
    <>
      <div className="layout-page text-center">
        <h1 className="py-4">List Product Brand</h1>
        <ButtonPage
          extraClass='mb-3'
          variant={ButtonVariant.PRIMARY}
          text={ButtonText.ADD_PRODUCTS}
          onClick={handleAddProduct}
        />
        <Listing
          tableHeader={tableHeader}
          listProduct={listProduct}
          onEditProduct={handleEditProduct}
        />
      </div>
      <Modal
        isVisible={visible}
        onHide={closeModal}
        type={typeModal}
        brand={listNameBrand}
        onResult={onResult}
        listProducts={listProduct}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default React.memo(Layout);
