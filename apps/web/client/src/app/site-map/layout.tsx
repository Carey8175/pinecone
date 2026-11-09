// Modified for pinecone; see NOTICE.
import { env } from '@/env';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sitemap | pinecone',
    description:
        'Complete sitemap for pinecone.com — the AI-powered visual editor for frontend development. Browse all pages including features, workflows, resources, and documentation.',
    openGraph: {
        title: 'Sitemap | pinecone',
        description:
            'Complete sitemap for pinecone.com. Browse all pages including features, workflows, and resources.',
        type: 'website',
        url: new URL('/site-map', env.NEXT_PUBLIC_SITE_URL).toString(),
        siteName: 'pinecone',
    },
    alternates: {
        canonical: new URL('/site-map', env.NEXT_PUBLIC_SITE_URL).toString(),
    },
    robots: {
        index: true,
        follow: true,
    },
};

// JSON-LD structured data for sitemap
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'pinecone Sitemap',
    description: 'Complete sitemap for pinecone.com — the AI-powered visual editor for frontend development.',
    url: new URL('/site-map', env.NEXT_PUBLIC_SITE_URL).toString(),
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
            {
                '@type': 'SiteNavigationElement',
                position: 1,
                name: 'Home',
                url: new URL('/', env.NEXT_PUBLIC_SITE_URL).toString(),
            },
            {
                '@type': 'SiteNavigationElement',
                position: 2,
                name: 'Features',
                url: new URL('/features', env.NEXT_PUBLIC_SITE_URL).toString(),
            },
            {
                '@type': 'SiteNavigationElement',
                position: 3,
                name: 'Workflows',
                url: new URL('/workflows', env.NEXT_PUBLIC_SITE_URL).toString(),
            },
            {
                '@type': 'SiteNavigationElement',
                position: 4,
                name: 'Pricing',
                url: new URL('/pricing', env.NEXT_PUBLIC_SITE_URL).toString(),
            },
            {
                '@type': 'SiteNavigationElement',
                position: 5,
                name: 'About',
                url: new URL('/about', env.NEXT_PUBLIC_SITE_URL).toString(),
            },
            {
                '@type': 'SiteNavigationElement',
                position: 6,
                name: 'FAQ',
                url: new URL('/faq', env.NEXT_PUBLIC_SITE_URL).toString(),
            },
        ],
    },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
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
