"use client";

import { PropertyDetail } from "../../chat-section";
import ChatAvatar from "./chat-avatar";
import { Message } from "./chat-messages";
import MessageItemCard from "./message-item-card";

export default function ChatItem(message: Message) {

  const textChatTemplate = (
    <>
      <ChatAvatar {...message} />
      <p className="break-words">{message.content}</p>
    </>
  );

  const propertyDetails = message?.data?.propertyDetails as PropertyDetail[];

  return (
    <div className="flex items-start gap-4 pt-5">
      {
        message.content ? textChatTemplate : null
      }

      <div className="flex flex-row space-x-4">

        {
          propertyDetails?.map((propertyDetail) =>
            (<MessageItemCard {...propertyDetail} />))
        }
      </div>


    </div>
  );
}
