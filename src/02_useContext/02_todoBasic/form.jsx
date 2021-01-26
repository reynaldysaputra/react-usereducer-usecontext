import React, { Fragment, useState } from 'react';
import { UseData, UsePost } from './customContext';

function Form() {
   const [name, setName] = useState('');
   const Post = UsePost();
   const data = UseData();

   const ActionButton = (e) => {
      e.preventDefault(); 
      Post(name, e); 
      setName('');
   }

   return(
      <Fragment>
         {console.log('render form')}
         <form onSubmit={ActionButton} data-action='add'>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add</button>
         </form>

      </Fragment> 
   )
}

export default Form;