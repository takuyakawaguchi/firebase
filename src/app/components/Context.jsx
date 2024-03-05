
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  return (
    <MyContext.Provider value="Hello Context!">
      {children}
    </MyContext.Provider>
  );
}

export function MyContextConsumer() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}