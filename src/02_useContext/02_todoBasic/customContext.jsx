import React, { useContext, useEffect, useReducer, useState } from 'react';

const KeyTodo = {
   ADD_DATA : 'add',
   UPDATE_DATA : 'update',
   DELETE_DATA : 'delete',
   KEYLOCAL : 'dataTodo'
}
const DataContext = React.createContext();
const AddDataContext = React.createContext();
const localStorageData = localStorage.getItem(KeyTodo.KEYLOCAL);
const temporaryData = localStorageData != null ? JSON.parse(localStorageData) : [];

function Reduce(data,action) {
   switch(action.type) {
      case KeyTodo.ADD_DATA : 
         temporaryData.push({id : Math.random(), name : action.payload.dataName});
         localStorage.setItem(KeyTodo.KEYLOCAL, JSON.stringify(temporaryData));
         return temporaryData;
      case KeyTodo.DELETE_DATA : 
         temporaryData.find((item,index) => item.id === action.payload.id && temporaryData.splice(index,1));
         localStorage.removeItem(KeyTodo.KEYLOCAL);
         localStorage.setItem(KeyTodo.KEYLOCAL, JSON.stringify(temporaryData))
         return JSON.parse(localStorage.getItem(KeyTodo.KEYLOCAL));
      default : 
         return data;
   }
}

export function UseData() {return useContext(DataContext)};
export function UsePost() {return useContext(AddDataContext)}

export function TodoContext({children}) {
   const [data, dispatch] = useReducer(Reduce, temporaryData);

   const Action = (data, dataAction) => {
      const actionKey = dataAction.target.dataset.action;
      if(KeyTodo.ADD_DATA === actionKey) {
         dispatch({type : KeyTodo.ADD_DATA, payload : {dataName: data}});
      }else if (KeyTodo.DELETE_DATA === actionKey) {
         dispatch({type : KeyTodo.DELETE_DATA, payload: {id : Number(data)}})
      }else {
         console.log(actionKey);
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

