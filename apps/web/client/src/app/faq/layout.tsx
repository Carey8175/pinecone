// Modified for pinecone; see NOTICE.
import { env } from '@/env';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ | pinecone - AI-Powered Visual Editor for Frontend Development',
    description: 'Frequently asked questions about pinecone, the AI-powered visual editor for frontend development. Learn about supported frameworks (React, Vue, Angular), component libraries (shadcn/ui, Material UI), AI features, pricing, and how pinecone differs from other design tools.',
    keywords: [
        'pinecone FAQ',
        'pinecone questions',
        'AI visual editor FAQ',
        'React visual editor',
        'design to code tool',
        'frontend AI tools',
        'pinecone vs Figma',
        'pinecone vs V0',
        'pinecone pricing',
        'pinecone features',
        'design system tools',
        'component library editor',
    ],
    openGraph: {
        title: 'FAQ | pinecone',
        description: 'Everything you need to know about pinecone - the AI-powered visual editor for frontend development.',
        type: 'website',
        url: new URL('/faq', env.NEXT_PUBLIC_SITE_URL).toString(),
        siteName: 'pinecone',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ | pinecone',
        description: 'Everything you need to know about pinecone - the AI-powered visual editor for frontend development.',
    },
    alternates: {
        canonical: new URL('/faq', env.NEXT_PUBLIC_SITE_URL).toString(),
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

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
