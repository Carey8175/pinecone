// Modified for pinecone; see NOTICE.
import { EditorAttributes } from '@pinecone/constants';
import { nanoid } from 'nanoid/non-secure';

export function getOrAssignDomId(node: HTMLElement): string {
    let domId = node.getAttribute(EditorAttributes.DATA_PINECONE_DOM_ID);
    if (!domId) {
        domId = `odid-${nanoid()}`;
        node.setAttribute(EditorAttributes.DATA_PINECONE_DOM_ID, domId);
    }
    return domId;
}

export const VALID_DATA_ATTR_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789-._:';

export function getOid(node: HTMLElement): string | null {
    return node.getAttribute(EditorAttributes.DATA_PINECONE_ID);
}

export function getInstanceId(node: HTMLElement): string | null {
    return node.getAttribute(EditorAttributes.DATA_PINECONE_INSTANCE_ID);
}
