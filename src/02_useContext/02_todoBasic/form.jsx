import React, { Fragment, useEffect, useState } from 'react';
import { UsePost } from './customContext';
import DataBox from './dataBox';

function Form() {
   const Post = UsePost();
   const [name, setName] = useState('');

   const ActionButton = (e) => {
      e.preventDefault(); 
      Post(name, e); 
      setName('')
   }

   return(
      <Fragment>
         <form onSubmit={ActionButton} data-action='add'>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add</button>
         </form>

         <DataBox/>
      </Fragment> 
   )
}

export default Form;