import React, { Fragment, useEffect, useState } from 'react';
import { UseData, UsePost } from './customContext';

function DataBox(){
   const data = UseData();
   const post = UsePost();
   const ActionButton = (e) =>{
      post(e.target.parentElement.dataset.id, e);
   };

   return(
      <Fragment>
         <h1>Data Pelanggan</h1>   
         {console.log(data)} 
         {data.map(item => (
            <div key={item.id} style={{display:'flex',marginLeft:'10px'}} data-id={item.id}>
               <p style={{marginRight : '20px'}}>{item.name}</p>
               <button 
                  type="submit" 
                  style={{cursor:'pointer'}} 
                  data-action='update' 
                  onClick={ActionButton}>Update
               </button>
               <button 
                  type="submit" 
                  style={{cursor:'pointer'}} 
                  data-action='delete' 
                  onClick={ActionButton}>Hapus
               </button>
            </div>
         ))}
      </Fragment>
   )
}

export default DataBox;