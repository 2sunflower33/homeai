import logging
import os
from llama_index import (
    StorageContext,
    load_index_from_storage,
    VectorStoreIndex, SimpleDirectoryReader, ServiceContext,
)
from dotenv import load_dotenv
from llama_index.llms import HuggingFaceLLM
from pathlib import Path
from llama_index import download_loader
import logging
import os
from llama_index import (
    StorageContext,
    load_index_from_storage,
    VectorStoreIndex, SimpleDirectoryReader, ServiceContext,
)
from llama_index.llms import HuggingFaceLLM
from llama_index import download_loader
from llama_index import VectorStoreIndex, SimpleDirectoryReader
from llama_index.tools import QueryEngineTool, ToolMetadata
from llama_index.query_engine import SubQuestionQueryEngine
from llama_index.callbacks import CallbackManager, LlamaDebugHandler
from llama_index import ServiceContext
from llama_parse import LlamaParse  # pip install llama-parse
from llama_index import SimpleDirectoryReader  # pip install llama-index
from app.engine.context import create_service_context
from llama_index.vector_stores import AstraDBVectorStore

service_context = create_service_context()

parser = LlamaParse(
    api_key=os.getenv("LLAMA_API_KEY"),  # can also be set in your env as LLAMA_CLOUD_API_KEY
    result_type="markdown"  # "markdown" and "text" are available
)
file_extractor = {".pdf": parser}
astra_db_store = AstraDBVectorStore(
    token = os.getenv("ASTRA_DB_APPLICATION_TOKEN"),
    api_endpoint= os.getenv("ASTRA_DB_API_ENDPOINT"),
    collection_name="test",
    embedding_dimension=1536,
)
query_engine_tools = []
storage_context = StorageContext.from_defaults(vector_store=astra_db_store)
for item in os.listdir("/Users/jingli/ragathon0203/homeai/backend/data/"):
    documents = SimpleDirectoryReader(f'/Users/jingli/ragathon0203/homeai/backend/data/{item}', file_extractor=file_extractor).load_data()
    vector_query_engine = VectorStoreIndex.from_documents(
        documents, use_async=True, service_context=service_context,
        storage_context=storage_context,
        # documents, use_async=False, service_context=service_context
    ).as_query_engine()
    query_engine_tools.append(QueryEngineTool(
        query_engine=vector_query_engine,
        metadata=ToolMetadata(
            name=item,
            description=f"this is a disclosure for {item}",
        ),
    ))
query_engine = SubQuestionQueryEngine.from_defaults(
    query_engine_tools=query_engine_tools,
    service_context=service_context,
    use_async=True,
)
def get_chat_engine():
    return query_engine