// Modified for pinecone desktop; see NOTICE.
import { MainChannels } from '@pinecone/models/constants';
import type { IpcRendererEvent } from 'electron';
import { ipcRenderer } from 'electron';

export function onPineconeViewCode(callback: (data: any) => void) {
    const subscription = (_event: IpcRendererEvent, data: any) => callback(data);
    ipcRenderer.on(MainChannels.VIEW_CODE_IN_PINECONE, subscription);
    return () => ipcRenderer.removeListener(MainChannels.VIEW_CODE_IN_PINECONE, subscription);
}

export function removePineconeViewCode(callback: (data: any) => void) {
    ipcRenderer.removeListener(
        MainChannels.VIEW_CODE_IN_PINECONE,
        callback as (event: IpcRendererEvent, ...args: any[]) => void,
    );
}

export function viewCodeInPinecone(args: any) {
    return ipcRenderer.invoke(MainChannels.VIEW_CODE_IN_PINECONE, args);
}
