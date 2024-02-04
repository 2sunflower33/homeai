# import nest_asyncio
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from llama_index.chat_engine.types import BaseChatEngine
from llama_index.llms.base import ChatMessage
from llama_index.llms.types import MessageRole
from pydantic import BaseModel
from app.engine.index import get_chat_engine

chat_router = r = APIRouter()


class _Message(BaseModel):
    role: MessageRole
    content: str
    test: bool = False

class _ChatData(BaseModel):
    messages: List[_Message]


class _Result(BaseModel):
    result: _Message

@r.post("")
async def chat(
        data: _ChatData,
        chat_engine: BaseChatEngine = Depends(get_chat_engine),
) -> _Result:
    # check preconditions and get last message
    if len(data.messages) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No messages provided",
        )
    lastMessage = data.messages.pop()
    if lastMessage.role != MessageRole.USER:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Last message must be from user",
        )
    # latestMessage.content = "what's the answer of 2+2"
    # convert messages coming from the request to type ChatMessage
    # messages = [
    #     ChatMessage(
    #         role=m.role,
    #         content=m.content,
    #     )
    #     for m in data.messages
    # ]
    messages = [
        ChatMessage(
            role=m.role,
            content="",
        )
        for m in data.messages
    ]
    # query chat engine
    response = await chat_engine.achat(lastMessage.content, messages)
    # response = await chat_engine.aquery(lastMessage.content)
    # nest_asyncio.apply()
    # response = chat_engine.query(lastMessage.content)

    return _Result(
        result=_Message(role=MessageRole.ASSISTANT, content=response.response, test=True)
    )