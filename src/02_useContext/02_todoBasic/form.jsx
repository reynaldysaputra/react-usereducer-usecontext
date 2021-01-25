import React, { Fragment, useEffect, useState } from 'react';
import { UsePost } from './customContext';

function Form() {
   const Post = UsePost();
   const [name, setName] = useState('');

   return(
      <Fragment>
         <form onSubmit={(e) => {e.preventDefault(); Post(name); setName('')}}>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add</button>
         </form>
      </Fragment> 
   )
}

export default Form;