import React from 'react';

//Types
import { Product } from '../../helpers/interface';

//Components
import ListingHeader from '../ListingHeader/';
import ListingRow from '../ListingRow';

interface Props {
  tableHeader: string[];
  listProduct: Product[];
  onEditProduct: (product: Product) => void;
}

const Listing = ({ tableHeader, listProduct, onEditProduct }: Props): JSX.Element => {
  return (
    <div className="shadow-lg bg-body rounded">
      <table className="table table-success table-borderless table-hover">
        <ListingHeader tableHeader={tableHeader} />
        <tbody>
          {listProduct.map((product) => (
            <ListingRow
              key={product.id}
              product={product}
              onEditProduct={() =>onEditProduct(product)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Listing);
