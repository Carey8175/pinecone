// Modified for pinecone; see NOTICE.
import { env } from '@/env';
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "pinecone",
    url: env.NEXT_PUBLIC_SITE_URL,
    logo: new URL('/logo.svg', env.NEXT_PUBLIC_SITE_URL).toString(),
    sameAs: [
        "https://github.com/Carey8175/pinecone",
    ],
};

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What kinds of things can I design with pinecone?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can prototype, ideate, and create websites from scratch with pinecone",
            },
        },
        {
            "@type": "Question",
            name: "Why would I use pinecone?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When you design in pinecone you design in the real product – in other words, the source of truth. Other products are great for ideating, but pinecone is the only one that lets you design with the existing product and the only one that translates your designs to code instantly.",
            },
        },
        {
            "@type": "Question",
            name: "Who owns the code that I write with pinecone?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The code you make with pinecone is all yours. You can export it on your local machine or publish it to a custom domain.",
            },
        },
    ],
};
