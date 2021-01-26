import React, { Fragment } from 'react';
import DataBox from './dataBox';
import Form from './form';

function Todo() {
   return(
      <Fragment>  
         <Form/>
         <DataBox/>
      </Fragment> 
   )
}

export default Todo;