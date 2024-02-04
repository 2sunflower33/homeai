"use client";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { useState } from "react";
import { PropertyDetail } from "../../chat-section";
import ChatAvatar from "./chat-avatar";
import { Message } from "./chat-messages";
import MessageItemCard from "./message-item-card";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { ChatOfferForm } from "./form/chat-offer-form";

export interface OfferListProps {
  propertyDetails: PropertyDetail[];
}

export default function OfferList({ propertyDetails }: OfferListProps) {

  // const propertyDetails = message?.data?.propertyDetails as PropertyDetail[];
  const [displayModal, setDisplayModal] = useState(false);

  
  const imageSrc = [
    '/1953_camargo.jpg',
    '/2614_coronet_blvd.jpg',
      ];

  const onShowDialog = () => {
    setDisplayModal(true);
  }

  const onHide = () => {
    setDisplayModal(false);
  }

  const renderFooter = () => {
    return (

      <div>
        <Button label="No" icon="pi pi-times mr-2" onClick={() => onHide()} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
      </div>
    );
  }
  return (
    <>
      {propertyDetails.map((detail: PropertyDetail, index: number) => (
        <div key={index}>
          <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full m-3">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={imageSrc[index%2]} />
              </div>
              <div className="pl-8 flex items-center justify-center">
                <div className="flex flex-row space-x-5">
                  <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Download 1 page disclourse
                  </button>
                  <button
                    onClick={() => setDisplayModal(true)}
                    className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Make an offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
      <Dialog header="Header" visible={displayModal} modal={true} style={{ width: '80vw' }}
        footer={renderFooter()} onHide={() => onHide()}>
        <ChatOfferForm />
      </Dialog>
    </>
  );
}