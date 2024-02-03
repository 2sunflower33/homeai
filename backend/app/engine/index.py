import logging
import os
from llama_index import (
    StorageContext,
    load_index_from_storage,
    VectorStoreIndex, SimpleDirectoryReader, ServiceContext,
)
from llama_index.llms import HuggingFaceLLM
from pathlib import Path
from llama_index import download_loader
from app.engine.constants import STORAGE_DIR
from app.engine.context import create_service_context
from llama_index.vector_stores import AstraDBVectorStore
from dotenv import load_dotenv

load_dotenv()

def get_chat_engine():
    service_context = create_service_context()
    # check if storage already exists
    astra_db_store = AstraDBVectorStore(
        token=os.getenv("ASTRA_DB_APPLICATION_TOKEN"),
	api_endpoint=os.getenv("ASTRA_DB_API_ENDPOINT"),
	collection_name="test",
	embedding_dimension=1536,
    )
    PDFReader = download_loader("PDFReader")
    loader = PDFReader()
    documents = loader.load_data(file=Path('/Users/jingli/ragathon0203/homeai/backend/data/disclosure.pdf'))
    logger = logging.getLogger("uvicorn")
    # load the existing index
    logger.info(f"Loading index from ...")
    storage_context = StorageContext.from_defaults(vector_store=astra_db_store)
    index = VectorStoreIndex.from_documents(
        documents, storage_context=storage_context
    )
    logger.info(f"Finished loading index from ")
    return index.as_chat_engine(similarity_top_k=5, chat_mode="condense_plus_context")