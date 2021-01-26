import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style/style.module.css';

function NavigationRoute() {
   return(
      <Fragment>
         <nav className={style.nav}>
            <NavLink to='/' exact className={style.navlink} activeClassName={style.activelink}>Home</NavLink>
            <NavLink to='/product' className={style.navlink} activeClassName={style.activelink}>Product</NavLink>
            <NavLink to='/cart' className={style.navlink} activeClassName={style.activelink}>Cart (0)</NavLink>
         </nav>
      </Fragment>
   )
}

export default NavigationRoute;