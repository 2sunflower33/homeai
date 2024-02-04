"use client";

import { useEffect, useRef, useState } from "react";
import ChatItem from "./chat-item";
import MessageItemCard from "./message-item-card";
import MessageItemTable from "./message-item-table";
import { PropertyDetail } from '../../chat-section';
import { JSONValue } from "ai";
import OfferList from "./chat-offer-vertical-list";
import { ChatOfferForm } from "./form/chat-offer-form";
import { Button } from 'primereact/button';

export enum Stage {
  SEARCHING,
  VIEWING_DETAILS,
  LISTING_OFFER,
  WRITING_OFFER,
}
export interface Message {
  id: string;
  content: string;
  role: string;
  data?: JSONValue;
}

export interface Content {
  text?: string;
  propertyDetails?: PropertyDetail[];
}

const messages = [
  {
    id: '4',
    content: 'end',
    role: 'b',
    data: {
      propertyDetails: [
        {
          house_address: "123 Oak Street, Springfield, IL",
          property_tax: 4500.00,
          house_size: "2000 sq ft",
          lot_size: "0.5 acres",
          bedroom_numbers: 4,
          bathroom_numbers: 3,
          upgrades: [
            {
              year_of_upgrade: 2018,
              what_was_done: "Kitchen Remodel",
              does_it_has_permit: true
            },
            {
              year_of_upgrade: 2020,
              what_was_done: "Roof Replacement",
              does_it_has_permit: true
            },
            {
              year_of_upgrade: 2022,
              what_was_done: "New HVAC System",
              does_it_has_permit: false
            }
          ]
        }
      ]
    }
  },
];

export default function ChatMessages({
  isLoading,
  reload,
  stop,
  stage,
  setStage,
}: {
  messages: Message[];
  isLoading?: boolean;
  stop?: () => void;
  reload?: () => void;
  stage: Stage;
  setStage: (stage: Stage) => void;
}) {
  const [offerListData, setOfferListData] = useState([
    messages[0].data.propertyDetails, messages[0].data.propertyDetails, messages[0].data.propertyDetails

  ]);

  const scrollableChatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollableChatContainerRef.current) {
      scrollableChatContainerRef.current.scrollTop =
        scrollableChatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <>
    stage: {stage}
    <div className="w-full max-w-5xl p-4 bg-white rounded-xl shadow-xl">
      <div className="flex flex-col gap-5 divide-y h-[50vh] overflow-scroll"
        ref={scrollableChatContainerRef}
      >
        {stage === Stage.VIEWING_DETAILS && messages.map((message: Message) => (
          <ChatItem
            message={message}
          />
        ))}

        {stage === Stage.LISTING_OFFER && (
          <div>listing offer
            <OfferList propertyDetails={offerListData} />
          </div>
        )}

        {stage === Stage.WRITING_OFFER && (
          <div>listing offer
            <ChatOfferForm />
          </div>
        )}
  <div
        onClick={() => setStage(stage + 1)}
        className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 max-w-sm">
          Next
        </div>
      </div>
    </div>
    </>
  );
}
