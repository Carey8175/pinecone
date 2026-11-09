// Modified for pinecone; see NOTICE.
import type { Canvas as DbCanvas } from '@pinecone/db';
import { v4 as uuidv4 } from 'uuid';

export const createDefaultCanvas = (projectId: string): DbCanvas => {
    return {
        id: uuidv4(),
        projectId: projectId,
    };
};
