// Modified for pinecone; see NOTICE.
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About pinecone',
    description: 'An AI-assisted visual workspace for Next.js and Tailwind interfaces.',
    alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
