"use client";
import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import CreateSport from "./sports/create-sport";

export const Background = (props: any) => {
  const authCtx = useContext(AuthContext);

  return (
    <div
      className="fixed top-[0] left-[0] w-full h-screen bg-modal z-10"
      onClick={authCtx.showCreateSport}
    >
      {props.children}
    </div>
  );
};

export const Overlay = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className=" bg-surface-light p-10 z-20 w-full overflow-scroll rounded-lg">
      <CreateSport />
    </div>
  );
};

const Modal = () => {
  return (
    <>
      <Background />
      <Overlay />
    </>
  );
};

export default Modal;
