// Modified for pinecone desktop; see NOTICE.
import { type ChatMessageContext } from '@pinecone/models/chat';
import { getContextIcon, getTruncatedName } from './helpers';

export function SentContextPill({ context }: { context: ChatMessageContext }) {
    return (
        <span
            className="flex flex-row gap-0.5 text-xs items-center select-none"
            key={context.displayName}
        >
            {getContextIcon(context)}
            <span className="truncate">{getTruncatedName(context)}</span>
        </span>
    );
}
