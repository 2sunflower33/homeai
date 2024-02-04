"use client";

import { useEffect, useRef } from "react";
import ChatItem from "./chat-item";
import MessageItemCard from "./message-item-card";
import MessageItemTable from "./message-item-table";
import { PropertyDetail } from '../../chat-section';

export interface Message {
  id: string;
  content: string;
  role: string;
}

export interface Content {
  text: string;
  PropertyDetail: PropertyDetail;
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
    role: 'user'
  },
  {
    id: '2',
    content: 'asd',
    role: 'b'
  },
  {
    id: '3',
    content: 'asd',
    role: 'b'
  },
  {
    id: '4',
    content: 'asd',
    role: 'b'
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
          // <ChatItem key={}/>
          messages.map((m: Message) => (
            <ChatItem key={m.id} {...m} />
          ))
          
        }

        <div className="flex flex-row space-x-4">
          <MessageItemCard />
          <MessageItemCard />
          <MessageItemCard />
          <MessageItemCard />
        </div>
        
      </div>
    </div>
    </>
  );
}
