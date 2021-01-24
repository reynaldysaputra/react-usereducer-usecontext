import React from 'react';
import { useTheme } from './contextHook';

function Box() {
   const theme = useTheme();

   return(
      <>
         <div
            style={{width:'300px',height:'300px',background:`${theme ? "yellow" : "#333"}`}}
         ></div>
      </>
   )
}

export default Box;