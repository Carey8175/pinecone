// Modified for pinecone; see NOTICE.
import { env } from '@/env';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features | pinecone - AI-Powered Visual Editor for React, Vue, Angular',
    description: 'Explore pinecone\'s features: AI constrained to your design system, infinite canvas, real-time collaboration, component library integration, version history, and direct GitHub PR output. Works with React, Next.js, Vue, Angular, Tailwind, shadcn/ui, and more.',
    keywords: [
        // Core features
        'visual editor features',
        'AI design tool features',
        'React visual editor',
        'design to code features',
        // Specific features
        'component library editor',
        'design system management',
        'real-time collaboration',
        'version history',
        'infinite canvas',
        'layer management',
        // Technical
        'React editor',
        'Next.js visual editor',
        'Tailwind visual editor',
        'shadcn visual editor',
        // Comparisons
        'Figma alternative for code',
        'visual code editor',
        'design engineer tools',
    ],
    openGraph: {
        title: 'Features | pinecone',
        description: 'AI-powered visual editor with infinite canvas, real-time collaboration, component library integration, and direct PR output.',
        type: 'website',
        url: new URL('/features', env.NEXT_PUBLIC_SITE_URL).toString(),
        siteName: 'pinecone',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Features | pinecone',
        description: 'AI-powered visual editor with infinite canvas, real-time collaboration, and direct PR output.',
        images: ['/logo.svg'],
    },
    alternates: {
        canonical: new URL('/features', env.NEXT_PUBLIC_SITE_URL).toString(),
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
    '@type': 'SoftwareApplication',
    name: 'pinecone',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: 'pinecone is an AI-powered visual editor for frontend development. Design with your real React, Vue, or Angular components on an infinite canvas. AI is constrained to your design system. Changes become mergeable pull requests.',
    url: new URL('/features', env.NEXT_PUBLIC_SITE_URL).toString(),
    featureList: [
        'AI constrained to your design system',
        'Infinite canvas for visual design',
        'Real-time team collaboration',
        'Component library integration',
        'Theming and branding management',
        'Visual layer management',
        'Version history with auto-save',
        'React and Next.js templates',
        'Direct GitHub PR output',
        'Works with Tailwind, shadcn/ui, Material UI',
        'Open source and self-hostable',
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
            name: 'What is pinecone?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'pinecone is an AI-powered visual editor for frontend development. It connects to your existing React, Vue, or Angular codebase and lets you design with your real components on an infinite canvas. AI is constrained to your design system, and changes become pull requests engineers can merge directly.',
            },
        },
        {
            '@type': 'Question',
            name: 'What features does pinecone offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'pinecone offers: an infinite canvas for visual design, AI constrained to your design system, real-time team collaboration, component library integration, centralized theming and branding, visual layer management, version history with auto-save, and direct GitHub PR output.',
            },
        },
        {
            '@type': 'Question',
            name: 'What frameworks and libraries does pinecone support?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'pinecone works with React, Next.js, Vue, Angular, Svelte, and more. It supports all CSS approaches including Tailwind, CSS Modules, and styled-components. Compatible with component libraries like shadcn/ui, Material UI, Chakra UI, Mantine, and Radix UI.',
            },
        },
        {
            '@type': 'Question',
            name: 'How is pinecone different from other design tools?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'pinecone is a visual editor for code. Unlike traditional design tools that create static mockups, pinecone works with your real components — what you design IS the code. Changes become PRs, not specs. AI is constrained to your design system, so there\'s no brand drift.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is pinecone open source?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. pinecone is open source and available on GitHub. You can browse the codebase, contribute improvements, or self-host it for your team.',
            },
        },
    ],
};

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
