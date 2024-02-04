# import nest_asyncio
from typing import List
import json
from typing import Dict
from builtins import Exception
from builtins import ValueError
import logging

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

class _ChatData(BaseModel):
    messages: List[_Message]

class _Upgrade(BaseModel):
    year_of_upgrade: int
    what_was_done: str
    does_it_have_permit: bool
    
class _PropertyDetail(BaseModel):
    house_address: str
    property_tax: float
    house_size: str
    lot_size: str
    bedroom_numbers: int
    bathroom_numbers: int
    upgrades: List[_Upgrade]


class _Result(BaseModel):
   property_detail: _PropertyDetail 
   major_concerns: str

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
    query_str = lastMessage.content;
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
    house_detail_query = "Extract the following information for property" +  query_str + """
What’s its address?
What’s the property tax?
What’s the house size?
What’s the lot size?
How many bedrooms?
How many bathrooms?
If there are updates, What are the updates have done? For each upgrade, what’s the year of upgrade? What was done? Does it have the permit?

If you are unsure about the answer, you can skip it.

Provide ONLY a code block using markdown of the JSON response and no additional comments , text, prose, descriptions, or acknowledgements. Schema:

{
"house_address": "string",
"property_tax": float,
"house_size": "string",
"lot_size": "string",
"bedroom_numbers": integer,
"bathroom_numbers": integer,
"upgrades": [
{
"year_of_upgrade": integer,
"what_was_done": "string",
"does_it_have_permit": boolean
},
{
"year_of_upgrade": integer,
"what_was_done": "string",
"does_it_have_permit": boolean
},
{
"year_of_upgrade": integer,
"what_was_done": "string",
"does_it_have_permit": boolean
}
]
}
"""
    # query chat engine
    # response = await chat_engine.achat(house_detail_query, messages)
    # response = await chat_engine.achat(lastMessage.content, messages)
    # response = await chat_engine.aquery(lastMessage.content)
    # nest_asyncio.apply()
    # response = chat_engine.query(lastMessage.content)

    response = await chat_engine.achat(house_detail_query, messages)
    # response = await chat_engine.achat(lastMessage.content, messages)

    logger = logging.getLogger("uvicorn")

    def strToDetailedInfo(input_str: str) -> _PropertyDetail:
        try:
            logger.info(f"$$$ input string: {input_str}")
            # Parse the JSON string into a Python dictionary
            data_dict: Dict = json.loads(input_str)
            logger.info(f"$$$ data_dict: {data_dict}")

            # Convert the dictionary into a _DetailedInfo instance using Pydantic
            property_detail = _PropertyDetail(**data_dict)

            return property_detail
        except Exception as e:
            # Handle any parsing or validation errors
            raise ValueError(f"Failed to convert string to DetailedInfo: {e}")
        
    # Convert the response to a DetailedInfo instance
    property_detail = strToDetailedInfo(response.response[7:-4])

    return _Result(
        property_detail = property_detail,
        major_concerns = "This is major concern"
    )