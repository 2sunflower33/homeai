"use client";

import { useEffect, useRef } from "react";
import ChatItem from "./chat-item";
import MessageItemCard from "./message-item-card";
import MessageItemTable from "./message-item-table";
import { PropertyDetail } from '../../chat-section';
import { JSONValue } from "ai";

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

export default function ChatMessages({
  messages,
  isLoading,
  reload,
  stop,
}: {
  messages: Message[];
  isLoading?: boolean;
  stop?: () => void;
  reload?: () => void;
}) {
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


  messages = [
    {
      id: '1',
      content: 'head',
      role: 'user',
    },
    {
      id: '2',
      content:  'asd' ,
      role: 'b',
    },
    {
      id: '3',
      content: 'end',
      role: 'b',
    },
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

  return (
    <>
      <div className="w-full max-w-5xl p-4 bg-white rounded-xl shadow-xl">
        <div
          className="flex flex-col gap-5 divide-y h-[50vh] overflow-scroll"
          ref={scrollableChatContainerRef}
        >
          {
            messages.map((m: Message) => (

              <ChatItem 
                key={m.id} 
                {...m}
                />
            ))
          }

        </div>
      </div>
    </>
  );
}
