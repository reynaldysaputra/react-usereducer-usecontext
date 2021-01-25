import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import { TodoContext } from './customContext';
import Home from './home';
import Todo from './todo';

function RoutingTodo() {
   return(
      <TodoContext>
         <BrowserRouter>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/todo'>Todo</NavLink>

               <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/todo' component={Todo} />
               </Switch>
         </BrowserRouter>
      </TodoContext>
   )
}

export default RoutingTodo;