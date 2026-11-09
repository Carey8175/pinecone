// Modified for pinecone; see NOTICE.
export const SUPPORT_EMAIL =
    (typeof window === 'undefined' && process.env.PINECONE_SUPPORT_EMAIL) || 'support@pinecone.example';
export const CONTACT_EMAIL =
    (typeof window === 'undefined' && process.env.PINECONE_CONTACT_EMAIL) || 'contact@pinecone.example';
