// Modified for pinecone; see NOTICE.
import type { PenpalChildMethods as PenpalChildMethodsType } from '@pinecone/web-preload/script/api';

// Preload methods should be treated as promises
export type PromisifiedPendpalChildMethods = {
    [K in keyof PenpalChildMethods]: (
        ...args: Parameters<PenpalChildMethods[K]>
    ) => Promise<ReturnType<PenpalChildMethods[K]>>;
};

export type PenpalChildMethods = PenpalChildMethodsType;

export const PENPAL_CHILD_CHANNEL = 'PENPAL_CHILD';
