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
                <img className="h-48 w-full object-cover md:w-48" src="https://picsum.photos/400/400" />
              </div>
              <div className="pl-8">
                <p className="block mt-1 text-lg leading-tight font-medium text-black">Specialty: Cardiology</p>
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Dr. John Doe</div> */}

                {/* <p className="mt-2 text-gray-500">Available Time Slots:</p> */}
                <div className="flex flex-row bg-gray-500 mr-5">
                  <span className="font-regular relative mb-4 rounded-lg  p-4 text-base leading-5 text-white opacity-100">
                    A success alert for showing message.
                  </span>
                  <span className="font-regular relative mb-4  rounded-lg p-4 text-base leading-5 text-white opacity-100">
                    A warning alert for showing message.
                  </span>
                </div>

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
