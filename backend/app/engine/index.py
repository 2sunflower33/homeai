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
from llama_index.vector_stores import AstraDBVectorStore


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
documents = SimpleDirectoryReader(f'/Users/jingli/ragathon0203/homeai/backend/data/1952-Camargo-Drive/',
                                  file_extractor=file_extractor).load_data()
storage_context = StorageContext.from_defaults(vector_store=astra_db_store)
index = VectorStoreIndex.from_documents(
    documents, storage_context=storage_context
)
def get_chat_engine():
    return index.as_chat_engine(similarity_top_k=5, chat_mode="condense_plus_context")