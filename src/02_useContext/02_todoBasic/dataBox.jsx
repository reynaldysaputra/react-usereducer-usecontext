import React, { Fragment, useEffect, useState } from 'react';
import { UseData } from './customContext';

function DataBox(){
   const data = UseData();

   return(
      <Fragment>
         <h1>Data Pelanggan</h1>     
         {data.map(item => (
            <div key={item.id} style={{display:'flex',marginLeft:'10px'}}>
               <p style={{marginRight : '20px'}}>{item.name}</p>
               <button type="submit" style={{cursor:'pointer'}}>Update</button>
               <button type="submit" style={{cursor:'pointer'}}>Hapus</button>
            </div>
         ))}
      </Fragment>
   )
}

export default DataBox;