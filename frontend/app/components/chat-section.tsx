"use client";

import { useChat } from "ai/react";
import { useMemo, useState } from "react";
import { insertDataIntoMessages } from "./transform";
import { ChatInput, ChatMessages } from "./ui/chat";
import ChatAdvice from "./ui/chat/chat-advice";
import Hero from "./ui/chat/hero";


interface Upgrade {
  year_of_upgrade: number;
  what_was_done: string;
  does_it_has_permit: boolean;
}

export interface PropertyDetail {
  house_address: string;
  property_tax: number;
  house_size: string;
  lot_size: string;
  bedroom_numbers: number;
  bathroom_numbers: number;
  upgrades: Upgrade[];
}

const propertyDetails: PropertyDetail[] = [{
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
}];


export default function ChatSection() {
  const {
    messages,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
    data,
  } = useChat({
    api: process.env.NEXT_PUBLIC_CHAT_API,
    headers: {
      "Content-Type": "application/json", // using JSON because of vercel/ai 2.2.26
    },
  });

  const [input, setInput] = useState('');
  
  const selectKeyword = (keyword: string) => {
    const DELIMITER = " ";
    setInput(input + DELIMITER + keyword);
  }

  const keywords = [
    {name: 'snack', content: 'no snack', onSelect: selectKeyword},
  ];

  const transformedMessages = useMemo(() => {
    return insertDataIntoMessages(messages, data);
  }, [messages, data]);

  return (
    <div className="space-y-4 max-w-5xl w-full">
      <Hero />
      <ChatMessages
        messages={transformedMessages}
        isLoading={isLoading}
        reload={reload}
        stop={stop}
      />
      <ChatAdvice
        keywords={keywords}
      />
      <ChatInput
        input={input}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
        multiModal={process.env.NEXT_PUBLIC_MODEL === "gpt-4-vision-preview"}
      />
    </div>
  );
}
