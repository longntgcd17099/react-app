import { useState } from 'react'

//Types
import { TableHeader } from '../src/constants/table-header'
import { brands, products } from './constants/mock-data';

//Components
import Layout from './components/Layout';

//Style css
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Product } from './helpers/interface';

function App() {
  const [listBrands, setBrands] = useState(brands);
  const [listProducts, setProducts] = useState(products);
  const [filter, setFilter] = useState('');

  const filterProducts = listProducts
    .filter(data => data.name.includes(filter))
    .map(data => {
      const mappedBrand = listBrands.find(item => item.id === data.brandId);
      return {
        ...data,
        brandName: mappedBrand?.name || '',
      };
    });

  const handleResult = (newProduct: Product[]) => {
    setProducts(newProduct);
  };

  return (
    <Layout
      tableHeader={TableHeader}
      listProduct={filterProducts}
      listNameBrand={brands}
      onResult={handleResult}
    />
  )
}

export default App
