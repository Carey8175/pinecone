// Modified for pinecone; see NOTICE.
import type { LayerNode } from '@pinecone/models';

export interface WindowMutatedData {
    added: Record<string, LayerNode>;
    removed: Record<string, LayerNode>;
}

export interface DomProcessedData {
    layerMap: Record<string, LayerNode>;
    rootNode: LayerNode;
}

export interface WindowResizedData {}

export type AutonomousEventData = 
    | WindowMutatedData 
    | DomProcessedData 
    | WindowResizedData; 