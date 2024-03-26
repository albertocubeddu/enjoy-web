"use client";
import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import CreateSport from "./sports/create/page";

export const Background = (props: any) => {
  const authCtx = useContext(AuthContext);

  return (
    <div
      className="absolute top-[0] left-[0] w-full h-screen bg-modal z-10"
      onClick={authCtx.showCreateSport}
    >
      {props.children}
    </div>
  );
};

export const Overlay = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-surface-light p-10 w-[714px] overflow-scroll rounded-lg z-20">
      <CreateSport />
    </div>
  );
};

const Modal = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.createSport) {
    return null;
  }

  return (
    <>
      <Background />
      <Overlay />
    </>
  );
};

export default Modal;
