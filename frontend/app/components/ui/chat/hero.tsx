"use client";

import { useEffect, useRef } from "react";
import ChatItem from "./chat-item";
import MessageItemCard from "./message-item-card";
import MessageItemTable from "./message-item-table";
import NavCard from "./nav-card";
import { Dialog } from 'primereact/dialog';
import UnitDetail from "./unit-detail";

export default function Hero() {

  return (
    <>
      <div className="flex flex-row space-x-10 justify-center">

        <NavCard />
        <NavCard />
      </div>
      {/* <UnitDetail /> */}
    </>
  );
}
