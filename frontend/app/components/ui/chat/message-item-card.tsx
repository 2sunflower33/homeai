"use client";

import { useState } from "react";
import { PropertyDetail } from "../../chat-section";
import UnitDetail from "./unit-detail";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export interface MessageItemCardProps {
  propertyDetail: PropertyDetail;
  addToFavorites: (propertyDetail: PropertyDetail) => void;
}

// const mockData = [
//   {
//     house_address: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
//     description: "Lorem, ipsum dolor sit amet",
//     imgSrc: "https://picsum.photos/400/400",
//     link1: "https://example.com/link1",
//     link2: "https://example.com/link2",
//   },
//   {
//     house_address: "Another house_address",
//     description: "Another description",
//     imgSrc: "https://picsum.photos/400/400",
//     link1: "https://example.com/link3",
//     link2: "https://example.com/link4",
//   },
// ];

export default function MessageItemCard({propertyDetail, addToFavorites}: MessageItemCardProps) {

  const { house_address} =  propertyDetail;

  const imgSrc = "https://picsum.photos/400/400";

  const [displayModal, setDisplayModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

const onClickIsLiked = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.stopPropagation();
  setIsLiked(!isLiked);
  addToFavorites(propertyDetail);
}

  const onShowDialog = () => {
    setDisplayModal(true);
  }

  const onHide = () => {
    setDisplayModal(false);
  }

  const renderFooter = () => {
    return (
      <div>
        <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
      </div>
    );
  }

  return (
    <>
      <div onClick={() => onShowDialog()}
        className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a onClick={(event) => onClickIsLiked(event)} className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          {!isLiked && <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>}
          {isLiked && <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>}
        </a>
        <a className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div  className="h-44 overflow-hidden relative">
            {imgSrc && <img src={imgSrc} alt="" />}
          </div>
        </div>
        <div className="bg-white py-4 px-3">
          <h3 className="text-xs mb-2 font-medium">{house_address}</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
              <div>
                <h2>{propertyDetail.house_address}</h2>
                <p>Property Tax: {propertyDetail.property_tax}</p>
                <p>House Size: {propertyDetail.house_size}</p>
                <p>Lot Size: {propertyDetail.lot_size}</p>
                <p>Bedrooms: {propertyDetail.bedroom_numbers}</p>
                <p>Bathrooms: {propertyDetail.bathroom_numbers}</p>
                <div>
                  {/* Upgrades:
        {propertyDetail.upgrades.map((upgrade, index) => (
          <p key={index}>{upgrade}</p> // Adjust this line based on the structure of Upgrade
        ))} */}
                </div>
              </div>
            </p>
            {/* SVGs */}
          </div>
        </div>
      </div>


      {
        <Dialog header="Header" visible={displayModal} modal={true} style={{ width: '80vw' }}
          footer={renderFooter()} onHide={() => onHide()}>

          <UnitDetail
            propertyDetail={propertyDetail}
          />
        </Dialog>

      }
    </>
  );
}