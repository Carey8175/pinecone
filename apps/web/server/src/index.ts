// Modified for pinecone; see NOTICE.
import { editorServerConfig } from '@pinecone/rpc';
import { createServer } from './server';

const server = createServer(editorServerConfig);

server.start();