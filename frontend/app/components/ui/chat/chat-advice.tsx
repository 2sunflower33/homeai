"use client";

import { useEffect, useRef, useState } from "react";

export interface ChatAdviceProps {
  /** The current value of the input */
  keywords: {
    name: string;
    content: string;
    onSelect: (e: string) => void;
  }[];
}

export default function ChatAdvice({ keywords }: ChatAdviceProps) {

  const [isShowingMore, setShowMore] = useState(false);

  return (
    <>
      <div className="flex select-none font-mono">
        <div className="flex flex-row space-x-4">

          {keywords.map((keyword: any) => (<h1
            onClick={() => keyword.onSelect(keyword.content)}
            className="px-3 py-1 shadow-lg shadow-gray-500/50 
            bg-black text-white 
            rounded-lg text-[15px] 
            cursor-pointer active:scale-[.97]"
          >
            {keyword.name}
          </h1>))}

          {isShowingMore ? <span>
            <h1
              className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
              more </h1>
          </span> : null}
          <h1
            onClick={() => setShowMore(!isShowingMore)}
            className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
            Show more
          </h1>
        </div>
      </div>
      {/* <form
        onSubmit={props.handleSubmit}
        className="flex items-start justify-between w-full max-w-5xl p-4 bg-white rounded-xl shadow-xl gap-4"
      >
        <input
          autoFocus
          name="message"
          placeholder="Type a message"
          className="w-full p-4 rounded-xl shadow-inner flex-1"
          value={props.input}
          onChange={props.handleInputChange}
        />
        <button
          disabled={props.isLoading}
          type="submit"
          className="p-4 text-white rounded-xl shadow-xl bg-gradient-to-r from-cyan-500 to-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send message
        </button>
      </form> */}
    </>
  );
}
