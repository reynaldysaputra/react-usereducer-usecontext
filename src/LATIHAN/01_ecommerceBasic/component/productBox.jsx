import React, { Fragment } from 'react';
import style from '../style/style.module.css';

function ProductBox() {
   return(
      <Fragment>
         <div className={style.productbox}>
            <div className={style.text1}>
               <h3>Gaming Mouse</h3>
               <p>-</p>
               <p>$20.00</p>
            </div>

            <button type="submit" className={style.buttonProduct}>Add to Cart</button>
         </div>
      </Fragment>
   )
}

export default ProductBox;