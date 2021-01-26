import React, { Fragment } from 'react';
import ProductBox from '../component/productBox';

function Product() {
   return(
      <Fragment>
         <h1>Product</h1>

         <ProductBox/>
         <ProductBox/>
         <ProductBox/>
      </Fragment>
   )
}

export default Product;