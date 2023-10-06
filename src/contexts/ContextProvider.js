import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialiState = {
  chat: false,
  notifications: false,
  userProfile: false,
  cart: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialiState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialiState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
