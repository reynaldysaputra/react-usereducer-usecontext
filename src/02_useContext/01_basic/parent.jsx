import React from 'react';
import Buttons from './buttons';
import { ThemeProvider } from './contextHook';

function AppsContext1() {
   return(
      <ThemeProvider>
         <Buttons/>
      </ThemeProvider>
   )
}

export default AppsContext1;