import React, { useContext, useEffect, useReducer, useState } from 'react';

const KeyTodo = {
   ADD_DATA : 'add',
   UPDATE_DATA : 'update',
   DELETE_DATA : 'delete',
   KEYLOCAL : 'dataTodo'
}
const DataContext = React.createContext();
const AddDataContext = React.createContext();
const localStorageData = JSON.parse(localStorage.getItem(KeyTodo.KEYLOCAL));
const temporaryData = localStorageData != null ? localStorageData : [];

function Reduce(data,action) {
   switch(action.type) {
      case KeyTodo.ADD_DATA : 
         temporaryData.push({id : Math.random(), name : action.payload.dataName});
         localStorage.setItem(KeyTodo.KEYLOCAL, JSON.stringify(temporaryData));         
         return JSON.parse(localStorage.getItem(KeyTodo.KEYLOCAL));
      case KeyTodo.DELETE_DATA : 
         temporaryData.find((item,index) => item.id === action.payload.id && temporaryData.splice(index,1));
         localStorage.removeItem(KeyTodo.KEYLOCAL);
         localStorage.setItem(KeyTodo.KEYLOCAL, JSON.stringify(temporaryData))
         return JSON.parse(localStorage.getItem(KeyTodo.KEYLOCAL));
      case KeyTodo.UPDATE_DATA :     
         console.log(JSON.parse(localStorage.getItem(KeyTodo.KEYLOCAL)));     
         return temporaryData;
      default : 
         return data;
   }
}

export function UseData() {return useContext(DataContext)};
export function UsePost() {return useContext(AddDataContext)}

export function TodoContext({children}) {
   const [data, dispatch] = useReducer(Reduce, temporaryData);

   console.log('render custom context');

   const Action = (value, dataAction) => {
      const actionKey = dataAction.target.dataset.action;
      
      if(KeyTodo.ADD_DATA === actionKey) {
         dispatch({type : KeyTodo.ADD_DATA, payload : {dataName: value}});
      }else if (KeyTodo.DELETE_DATA === actionKey) {
         dispatch({type : KeyTodo.DELETE_DATA, payload: {id : Number(value)}})
      }else {
         dispatch({type : KeyTodo.UPDATE_DATA, payload: {id : Number(value)}})
      }
   }

   return(
      <DataContext.Provider value={data}>
         <AddDataContext.Provider value={Action}>
            {children}
         </AddDataContext.Provider>
      </DataContext.Provider>
   )
}

