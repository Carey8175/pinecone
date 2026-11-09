// Modified for pinecone; see NOTICE.
import type { Frame } from "@pinecone/models";

export function roundDimensions(frame: Frame): Frame {
    return {
        ...frame,
        position: {
            x: Math.round(frame.position.x),
            y: Math.round(frame.position.y),
        },
        dimension: {
            width: Math.round(frame.dimension.width),
            height: Math.round(frame.dimension.height),
        },
    };
}

