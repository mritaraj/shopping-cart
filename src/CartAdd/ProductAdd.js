import { createContext,useEffect, useState } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
// import PRODUCTS from '../shop-data.json';
import productJson from '../server/products/index.get.json';

console.log('productJson', productJson)

export const ProductsContext = createContext({
    products: [],
  });
export const ProductsProvider = ({children}) => {
    const value = { productJson };

    console.log('jjjjjjjjjjjj', productJson);

    return(
        <ProductsProvider.Provider value={value}>
          {children}    
        </ProductsProvider.Provider>
    )
}  
