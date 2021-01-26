import React, { Fragment } from 'react';
import { UseData } from './customContext';

function Home() {
   const data = UseData();

   return(
      <Fragment>
         <h1>Home</h1>
         <h1>Jumlah Pelanggan di tokopedia ada : {data.length} orang</h1>
      </Fragment> 
   )
}

export default Home;