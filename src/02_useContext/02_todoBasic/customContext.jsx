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
      default : 
         return data;
   }
}

export function UseData() {return useContext(DataContext)};
export function UsePost() {return useContext(AddDataContext)}

export function TodoContext({children}) {
   const [data, dispatch] = useReducer(Reduce, temporaryData);

   const AddData = (name) => {
      dispatch({type : KeyTodo.ADD_DATA, payload:{dataName: name}});
   }

   return(
      <DataContext.Provider value={data}>
         <AddDataContext.Provider value={AddData}>
            {children}
         </AddDataContext.Provider>
      </DataContext.Provider>
   )
}

