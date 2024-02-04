"use client";

import Image from "next/image";

import { PropertyDetail } from "../../chat-section";
import ChatAvatar from "./chat-avatar";
import { Message } from "./chat-messages";
import MessageItemCard from "./message-item-card";
import localImage from './path/to/your/image.jpg'; // replace with the path to your image file

export interface ChatItemProps {
  message: Message;
  addToFavorites: (propertyDetail: PropertyDetail) => void;
}


export default function ChatItem(props: ChatItemProps) {

  const imageSrc = [
'/1953_camargo.jpg',
'/2614_coronet_blvd.jpg',


  ];
  const { message, addToFavorites } = props;

  const textChatTemplate = (
    <>
      <ChatAvatar {...message} />
      <p className="break-words">{message.content}</p>
    </>
  );

  const propertyDetails = message?.data?.propertyDetails as PropertyDetail[];
  const majorConcerns = message?.data?.majorConcerns as any[];


  return (
    <div className="flex items-start gap-4 pt-5">
      {/* {
        message.content ? textChatTemplate : null
      } */}

      <div className="flex flex-row space-x-4">
        {
          propertyDetails?.map((propertyDetail, i) =>
            (<MessageItemCard propertyDetail={propertyDetail} majorConcerns={majorConcerns[i]}
               addToFavorites={addToFavorites} 
                imgLink={imageSrc[i%2]}
            />))
        }
      </div>
    </div>
  );
}
