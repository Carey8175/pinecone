// Modified for pinecone; see NOTICE.
'use client';

import { Button } from '@pinecone/ui/button';
import { Icons } from '@pinecone/ui/icons';

export function EditGitHub({ filePath }: { filePath: string }) {
    return (
        <Button
            onClick={() => {
                window.open(`https://github.com/Carey8175/pinecone/blob/main/docs/content/docs/${filePath}`, '_blank');
            }}
            variant="outline"
            className="w-fit border rounded-xl p-2 font-medium text-sm text-fd-secondary-foreground bg-fd-secondary-background hover:bg-fd-secondary-background/80 mt-8 inline-flex items-center gap-2"
        >
            <Icons.GitHubLogo className="w-4 h-4" />
            Edit on GitHub
        </Button >
    );
}