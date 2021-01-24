import React from 'react';
import Box from './box';
import {useThemeUpdate} from './contextHook';

function Buttons() {
   const setToggle = useThemeUpdate();

   return(
      <>
         <button onClick={setToggle}>okay</button>

         <Box/>
      </>
   )
}

export default Buttons;