"use client";

import { PropertyDetail } from "../../chat-section";
import ChatAvatar from "./chat-avatar";
import { Message } from "./chat-messages";
import MessageItemCard from "./message-item-card";

export interface ChatItemProps {
  message: Message;
  addToFavorites: (propertyDetail: PropertyDetail) => void;
}


export default function ChatItem(props: ChatItemProps) {
  const { message, addToFavorites } = props;

  const textChatTemplate = (
    <>
      <ChatAvatar {...message} />
      <p className="break-words">{message.content}</p>
    </>
  );

  const propertyDetails = message?.data?.propertyDetails as PropertyDetail[];


  return (
    <div className="flex items-start gap-4 pt-5">
      {/* {
        message.content ? textChatTemplate : null
      } */}

      <div className="flex flex-row space-x-4">
        {
          propertyDetails?.map((propertyDetail) =>
            (<MessageItemCard propertyDetail={propertyDetail} addToFavorites={addToFavorites}/>))
        }
      </div>
    </div>
  );
}
