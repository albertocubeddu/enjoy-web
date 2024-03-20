"use client";

import Search from "../ui/search";
import Modal from "../ui/modal";
import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

export default function Home() {
  const authCtx = useContext(AuthContext);

  return (
    <main className="flex flex-col min-h-screen  w-2/4 m-auto gap-4 text-primary text-2xl">
      <h1 className="text-on-surface font-semibold">Sports</h1>
      <div>
        <Search placeholder="Search" />
      </div>
      {authCtx.createSport ? <Modal /> : ""}
    </main>
  );
}
