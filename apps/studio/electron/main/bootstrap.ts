import { app } from 'electron';
import path from 'node:path';
import { mkdirSync } from 'node:fs';

// Set identity before loading modules that initialize persistent storage.
app.setName('pinecone');
const dataDirectory = path.join(app.getPath('appData'), 'pinecone');
mkdirSync(dataDirectory, { recursive: true });
app.setPath('userData', dataDirectory);
void import('./index');
