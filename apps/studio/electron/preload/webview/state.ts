// Modified for pinecone desktop; see NOTICE.
import { WebviewChannels } from '@pinecone/models/constants';
import { ipcRenderer } from 'electron';

export function setWebviewId(webviewId: string) {
    (window as any)._pineconeWebviewId = webviewId;
}

export function getWebviewId(): string {
    const webviewId = (window as any)._pineconeWebviewId;
    if (!webviewId) {
        console.warn('Webview id not found');
        ipcRenderer.sendToHost(WebviewChannels.GET_WEBVIEW_ID);
        return '';
    }
    return webviewId;
}
