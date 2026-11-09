// Modified for pinecone; see NOTICE.
import { env } from '@/env';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Workflows | Integrate pinecone with Claude Code, Cursor & AI Coding Tools | pinecone',
    description:
        'Connect pinecone to your AI coding workflow. Add a visual design layer to Claude Code, Cursor, and other AI tools. Design with your real components, collaborate with your team, ship PRs.',
    keywords: [
        // Primary keywords
        'claude code visual editor',
        'cursor visual editor',
        'AI coding workflow',
        'visual layer for AI',
        // Tool integrations
        'claude code for designers',
        'cursor for designers',
        'AI code editor visual',
        'visual AI coding',
        // Workflow
        'design to code workflow',
        'AI design workflow',
        'code generation visual',
        'AI development tools',
        // Problem/solution
        'visual canvas AI',
        'design system AI',
        'team collaboration AI',
    ],
    openGraph: {
        url: new URL('/workflows', env.NEXT_PUBLIC_SITE_URL).toString(),
        type: 'website',
        siteName: 'pinecone',
        title: 'Workflows | pinecone',
        description:
            'Connect pinecone to your AI coding workflow. Visual design layer for Claude Code, Cursor, and more.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Workflows | pinecone',
        description: 'Visual design layer for Claude Code, Cursor, and AI coding tools.',
        images: ['/logo.svg'],
    },
    alternates: {
        canonical: new URL('/workflows', env.NEXT_PUBLIC_SITE_URL).toString(),
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
        },
    },
};

// JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'pinecone Workflows',
    description:
        'Connect pinecone to your AI coding workflow. Add a visual design layer to Claude Code, Cursor, and other AI tools.',
    url: new URL('/workflows', env.NEXT_PUBLIC_SITE_URL).toString(),
    mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'pinecone',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        description:
            'pinecone is an AI-powered visual editor that integrates with your AI coding workflow. Design with your real components, collaborate with your team, ship PRs.',
        featureList: [
            'Visual canvas for AI-generated UIs',
            'Integration with Claude Code',
            'Vibe coding for teams — collaboration for AI workflows',
            'Integration with Cursor',
            'Design with your real components',
            'Real-time team collaboration',
            'Direct PR output to GitHub',
            'AI constrained to your design system',
        ],
    },
};

export default function WorkflowsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
