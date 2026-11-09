// Modified for pinecone; see NOTICE.
import type { FileEntry } from '@pinecone/file-system/hooks';
import { cn } from '@pinecone/ui/utils';
import type { RowRendererProps } from 'react-arborist';

export const FileTreeRow = ({ attrs, children, isHighlighted }: RowRendererProps<FileEntry> & { isHighlighted: boolean }) => {
    return (
        <div
            {...attrs}
            className={cn(
                'outline-none h-6 cursor-pointer min-w-0 w-auto rounded',
                attrs['aria-selected'] ? [
                    'bg-red-500/90 dark:bg-red-500/90',
                    'text-primary dark:text-primary',
                ] : [
                    isHighlighted && 'bg-background-pinecone text-foreground-primary',
                ],
                isHighlighted ?
                    'text-foreground-primary bg-red-500/90 hover:bg-red-500' :
                    'text-foreground-pinecone/70 hover:bg-red-500/30 hover:text-foreground-primary'
            )}
        >
            {children}
        </div>
    );
};
