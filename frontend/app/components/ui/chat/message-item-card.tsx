"use client";

import { useState } from "react";
import { PropertyDetail } from "../../chat-section";
import UnitDetail from "./unit-detail";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const mockData = [
  {
    title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
    description: "Lorem, ipsum dolor sit amet",
    imgSrc: "https://picsum.photos/400/400",
    link1: "https://example.com/link1",
    link2: "https://example.com/link2",
  },
  {
    title: "Another title",
    description: "Another description",
    imgSrc: "https://picsum.photos/400/400",
    link1: "https://example.com/link3",
    link2: "https://example.com/link4",
  },
];

export default function MessageItemCard(propertyDetail: PropertyDetail) {

  const { title, description, imgSrc, link1, link2 } = mockData[0];

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
        <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => onShowDialog()}
        className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          {/* SVG */}
        </a>
        <a className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            {imgSrc && <img src={imgSrc} alt="" />}
          </div>
        </div>
        <div className="bg-white py-4 px-3">
          <h3 className="text-xs mb-2 font-medium">{title}</h3>
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
          Unit detail

          <UnitDetail
            propertyDetail={propertyDetail}
          />
        </Dialog>

      }
    </>
  );
}
