// Modified for pinecone; see NOTICE.
import { Icons } from '@pinecone/ui/icons';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <div className="flex items-center gap-2">
                <Icons.PineconeLogo className="w-4 h-4" />
                <span >pinecone Docs</span>
            </div>
        ),
    },
    links: [
        {
            type: 'main',
            text: 'GitHub',
            url: 'https://github.com/Carey8175/pinecone',
            external: true,
            icon: <Icons.GitHubLogo className="w-4 h-4" />
        },
        {
            type: 'main',
            text: 'Discord',
            url: 'https://github.com/Carey8175/pinecone',
            external: true,
            icon: <Icons.DiscordLogo className="w-4 h-4" />
        }
    ]
};
