import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/cart';
import NavigationRoute from './component/nav';
import Home from './pages/home';

function AppsEcommerce1() {
   return(
      <BrowserRouter>
         <NavigationRoute/>

         <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/product' component={Product} />
            <Route path='/cart' component={Cart} />
         </Switch>
      </BrowserRouter>
   )
}

export default AppsEcommerce1;