import React, { Fragment, useReducer, useState } from 'react';

const ACTION = {
   ADD_TODO : 'add',
   COMPLETE_TODO : 'complete',
   DELETE_TODO : 'delete'
}

function reduceTodo(data,action){
   switch(action.type){
      case ACTION.ADD_TODO : 
         return [...data, {id : Date.now(), name: action.payload.name, complete : false}];
      case ACTION.COMPLETE_TODO : 
         return data.map(item => {
            if(item.id === action.payload.id){
               return {...item, complete : !item.complete}
            }
            return item;
         })
      case ACTION.DELETE_TODO : 
         return data.filter(item => item.id !== action.payload.id);
   }
}

function AppsTodo() {
   const [todo, dispatch] = useReducer(reduceTodo, []);
   const [name, setName] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({type : ACTION.ADD_TODO, payload : {name : name}})
      setName('');
   }

   const handleComplete = (item) => {   
      dispatch({type : ACTION.COMPLETE_TODO, payload : {id : item}})
   }

   const handleDelete = (item) => {
      dispatch({type : ACTION.DELETE_TODO, payload : {id : item}})
   }
   
   return(
      <Fragment>
         <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>
         </form>

         <ul>
            {todo.map(item => (
               <li key={item.id} style={{textDecoration: item.complete === true ? 'line-through' : 'underline'}}>
                  {item.name}
                  <button 
                     style={{color:'blue',cursor:'pointer',marginLeft:'10%'}}
                     onClick={() => handleComplete(item.id)}
                  >complete</button>
                  <button
                     style={{color:'red',cursor:'pointer'}}
                     onClick={() => handleDelete(item.id)}
                  >
                     Delete
                  </button>
               </li>
            ))}
         </ul>
      </Fragment>
   )
}

export default AppsTodo;