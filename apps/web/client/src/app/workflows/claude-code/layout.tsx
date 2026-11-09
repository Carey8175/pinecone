// Modified for pinecone; see NOTICE.
import { env } from '@/env';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Claude Code for Designers: Add a Visual Canvas to Your Workflow | pinecone',
    description:
        'Designers using Claude Code need a visual layer. pinecone gives you an infinite canvas for your AI-built UIs — with your real components, team collaboration, and PR output.',
    keywords: [
        // Primary keywords
        'claude code for designers',
        'claude code visual editor',
        'claude code design tool',
        'claude code UI design',
        'visual layer for claude code',
        'claude code collaboration',
        // Related tools
        'cursor for designers',
        'AI code visual canvas',
        'anthropic claude design',
        // Workflow
        'design engineer workflow',
        'AI coding visual design',
        'claude code infinite canvas',
        'visual AI development',
        // Problem/solution
        'claude code team collaboration',
        'claude code PR output',
        'claude code design system',
        'AI generated UI editor',
    ],
    openGraph: {
        url: new URL('/workflows/claude-code', env.NEXT_PUBLIC_SITE_URL).toString(),
        type: 'website',
        siteName: 'pinecone',
        title: 'Claude Code for Designers: Add a Visual Canvas to Your Workflow | pinecone',
        description:
            'Designers using Claude Code need a visual layer. pinecone gives you an infinite canvas for your AI-built UIs — with your real components, team collaboration, and PR output.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Claude Code for Designers | pinecone',
        description:
            'The visual canvas your Claude Code workflow is missing. Design with your real components, collaborate with your team, ship PRs.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    alternates: {
        canonical: new URL('/workflows/claude-code', env.NEXT_PUBLIC_SITE_URL).toString(),
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'pinecone for Claude Code',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description:
        'pinecone adds a visual design layer to Claude Code. An infinite canvas for AI-built UIs with your real components, team collaboration, and direct PR output.',
    url: new URL('/workflows/claude-code', env.NEXT_PUBLIC_SITE_URL).toString(),
    featureList: [
        'Infinite canvas for Claude Code projects',
        'Visual editing of AI-generated UIs',
        'Design with your real React components',
        'Real-time team collaboration',
        'Spatial comments on the canvas',
        'Direct GitHub PR output',
        'AI constrained to your design system',
        'No coding required for designers',
    ],
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free tier available',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How does pinecone work with Claude Code?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Claude Code handles the terminal and code generation. pinecone provides the visual canvas. Together, they give you a complete design-to-code workflow — Claude Code builds, pinecone lets you visually iterate and refine.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need to know code to use pinecone with Claude Code?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "No. pinecone gives you a visual canvas where you can drag, resize, and arrange elements. The code runs underneath — you don't need to touch it unless you want to.",
            },
        },
        {
            '@type': 'Question',
            name: 'Can I use my existing components with pinecone?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. pinecone connects to your existing codebase and lets you design with your real components — the buttons, cards, and layouts your engineers already built.',
            },
        },
        {
            '@type': 'Question',
            name: 'What makes pinecone different from using Claude Code alone?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Claude Code is terminal-based and works best for building. pinecone adds the visual layer designers need — an infinite canvas, team collaboration, and visual iteration on AI-generated UIs.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does pinecone constrain AI to my design system?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Unlike raw AI code generation, pinecone constrains AI to your existing components, colors, and tokens. This means outputs match your design system — no drift, no off-brand results.',
            },
        },
    ],
};

export default function ClaudeCodeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {children}
        </>
    );
}
