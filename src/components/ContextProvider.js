import React, { createContext, useState,useEffect } from 'react';
import GetCon from './ContextConsumer';
import Cart from './Cart';

export const customContext = createContext();

const UseCon = ({children}) => {
  const [state, setState] = useState(0);
  const [image,setImage ] = useState();
  const [wishlist,setWishlist ] = useState(0);

  const api = async()=>{
    const fetchImage = await fetch("https://picsum.photos/300/300");
    setImage(fetchImage.url);
  }
  useEffect(()=>{
    api();
  },[]);
  return (
    <customContext.Provider value={{state, setState,image,wishlist,setWishlist}}>
      {children}
    </customContext.Provider>
  );
};

export default UseCon;