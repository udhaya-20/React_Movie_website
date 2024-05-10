import React, { createContext, useContext, useState } from 'react'

 const MyContext = createContext();
export function Context({children}) {
    const [data,setdata]=useState({});

  return (
    <>
    <MyContext.Provider value={{ data, setdata }}>
    {children}
  </MyContext.Provider>
  </>
  )
}

export const Cards=()=>{
    return useContext(MyContext);

}
