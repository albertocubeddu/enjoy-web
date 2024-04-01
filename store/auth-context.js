"use client";

import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  showCreateSport: () => {},
  createSport: false,
  changeThemeHandler: () => {},
  darkMode: false,
});

const AuthContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeThemeHandler = () => {
    setDarkMode(!darkMode);
  };

  //Store users preferred theme

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  //Add theme

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    const htmlClasses = document.querySelector("html").classList;
    if (darkMode) {
      htmlClasses.add("dark");
    } else {
      htmlClasses.remove("dark");
    }
  }, [darkMode]);

  //Sport Create

  const [createSport, setCreateSport] = useState(false);

  const showSportHandler = () => {
    setCreateSport(!createSport);
  };

  const authCtx = {
    darkMode,
    changeThemeHandler,
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
