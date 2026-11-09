// Modified for pinecone; see NOTICE.
'use client';

import { Button } from '@pinecone/ui/button';
import { ReactNode } from 'react';

interface EditButtonProps {
    href: string;
    className?: string;
    children: ReactNode;
}

export function EditButton({ href, className, children }: EditButtonProps) {
    return (
        <Button
            onClick={() => {
                window.open(href, '_blank');
            }}
            variant="secondary"
            size="sm"
            className={className}
        >
            {children}
        </Button>
    );
} 