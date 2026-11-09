// Modified for pinecone; see NOTICE.
import { env } from '@/env';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vibe Coding for Teams: Add Collaboration to Your AI Workflow | pinecone',
    description:
        'Vibe coding has a collaboration problem. pinecone solves it. Design with your real components on an infinite canvas, work together in real-time, and ship PRs — not throwaway prototypes.',
    keywords: [
        // Primary keywords
        'vibe coding',
        'vibe coding for teams',
        'vibe coding collaboration',
        'vibe coding tool',
        // Related terms
        'agentic engineering',
        'AI coding collaboration',
        'team vibe coding',
        'collaborative AI coding',
        // Problem/solution
        'vibe coding workflow',
        'vibe coding design system',
        'vibe coding real components',
        // Comparisons
        'AI code generator alternative',
        'AI code generator team',
        'solo coding alternative',
        // Workflow
        'AI to PR workflow',
        'design to code team',
        'visual AI coding',
    ],
    openGraph: {
        url: new URL('/workflows/vibe-coding', env.NEXT_PUBLIC_SITE_URL).toString(),
        type: 'website',
        siteName: 'pinecone',
        title: 'Vibe Coding for Teams | pinecone',
        description:
            'Vibe coding has a collaboration problem. pinecone solves it. Design with your real components, collaborate in real-time, ship PRs.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vibe Coding for Teams | pinecone',
        description:
            'Vibe coding has a collaboration problem. pinecone solves it. Real components, real-time collaboration, real PRs.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    alternates: {
        canonical: new URL('/workflows/vibe-coding', env.NEXT_PUBLIC_SITE_URL).toString(),
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
    name: 'pinecone for Vibe Coding Teams',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description:
        'pinecone adds collaboration to vibe coding. Design with your real components on an infinite canvas, work together in real-time, and ship changes as mergeable pull requests.',
    url: new URL('/workflows/vibe-coding', env.NEXT_PUBLIC_SITE_URL).toString(),
    featureList: [
        'Team collaboration for vibe coding',
        'Real-time multiplayer canvas',
        'Design with your real components',
        'AI constrained to your design system',
        'Spatial comments and feedback',
        'Direct GitHub PR output',
        'Works with React, Vue, Angular',
        'Supports Tailwind, shadcn/ui, Material UI',
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
            name: 'What is vibe coding?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Vibe coding is a workflow where you describe what you want to build in natural language and AI generates the code. Most vibe coding tools are designed for solo use, not teams.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the problem with vibe coding?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Most vibe coding tools are solo workflows. You can't easily share work-in-progress, collaborate in real-time, or hand off to engineers. The output is often throwaway code that doesn't match your design system.",
            },
        },
        {
            '@type': 'Question',
            name: 'How does pinecone solve the vibe coding collaboration problem?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'pinecone adds a visual canvas layer to vibe coding. Share your canvas with teammates, leave spatial comments, and work together in real-time. AI is constrained to your design system, so outputs are consistent. Changes become PRs engineers can merge.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I use pinecone with my existing vibe coding tools?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Use any AI coding tool to build. Then open in pinecone to visually iterate, collaborate with your team, and refine before shipping. pinecone works with your existing codebase.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does pinecone work with my design system?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. pinecone connects to your existing component library and constrains AI to your design system. Your buttons, cards, and layouts — not generic HTML. No brand drift.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do vibe-coded changes get into production?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Changes you make in pinecone become real code changes. When ready, submit as a pull request for engineers to review and merge. No export, no translation — the code is production-ready.',
            },
        },
    ],
};

export default function VibeCodingLayout({ children }: { children: React.ReactNode }) {
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
