"use client";

import React, { useState } from "react";

export const AuthContext = React.createContext({
  showCreateSport: () => {},
  createSport: false,
});

const AuthContextProvider = (props) => {
  const [createSport, setCreateSport] = useState(false);

  const showSportHandler = () => {
    setCreateSport(!createSport);
  };

  const authCtx = {
    createSport,
    showCreateSport: showSportHandler,
  };

  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
