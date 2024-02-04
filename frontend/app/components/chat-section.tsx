"use client";

import { useChat } from "ai/react";
import { useMemo, useState } from "react";
import { insertDataIntoMessages } from "./transform";
import { ChatInput, ChatMessages } from "./ui/chat";
import ChatAdvice from "./ui/chat/chat-advice";
import Hero from "./ui/chat/hero";

export enum Stage {
  SEARCHING,
  VIEWING_DETAILS,
  LISTING_OFFER,
  WRITING_OFFER,
}

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
  const [currentStage, setStage] = useState(Stage.SEARCHING);

  // console.log("ChatSection.tsx:52:currentStage", currentStage);
  
  const selectKeyword = (keyword: string) => {
    const DELIMITER = " ";
    setInput(input + DELIMITER + keyword);
  }

  const keywords = [
    {name: 'No Termite', content: 'no snack', onSelect: selectKeyword},
    {name: 'No Legal Issue', content: 'no snack', onSelect: selectKeyword},
    {name: 'No Environment Risk', content: 'no snack', onSelect: selectKeyword},
  ];

  const transformedMessages = useMemo(() => {
    return insertDataIntoMessages(messages, data);
  }, [messages, data]);

  return (
    <div className="space-y-4 max-w-5xl w-full">
      {/* <Hero /> */}
      <ChatMessages
        messages={transformedMessages}
        isLoading={isLoading}
        reload={reload}
        stop={stop}
        stage={currentStage}
        setStage={setStage}
      />
        <span
        onClick={() => setStage(currentStage + 1)}
        className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 max-w-sm">
          Next
        </span>
        {/* <span
        onClick={() => setStage(currentStage-1)}
        className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 max-w-sm">
          Pre
        </span> */}
        
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
