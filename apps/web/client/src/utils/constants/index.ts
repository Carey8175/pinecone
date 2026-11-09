// Modified for pinecone; see NOTICE.
export const Routes = {
    // Landing page
    HOME: '/',
    PRICING: '/pricing',
    FAQ: '/faq',
    ABOUT: '/about',
    CAREERS: '/careers',
    SITEMAP: '/site-map',
    FEATURES: '/features',
    FEATURES_AI: '/features/ai',
    FEATURES_AI_FRONTEND: '/features/ai-for-frontend',
    FEATURES_BUILDER: '/features/builder',
    FEATURES_PROTOTYPE: '/features/prototype',

    // Workflows
    WORKFLOWS: '/workflows',
    WORKFLOWS_CLAUDE_CODE: '/workflows/claude-code',
    WORKFLOWS_VIBE_CODING: '/workflows/vibe-coding',

    // Auth
    LOGIN: '/login',
    AUTH_CALLBACK: '/auth/callback',
    AUTH_CODE_ERROR: '/auth/auth-code-error',
    AUTH_REDIRECT: '/auth/redirect',
    DEMO_ONLY: '/see-a-demo',

    // Dashboard
    PROJECTS: '/projects',
    PROJECT: '/project',
    IMPORT_PROJECT: '/projects/import',
    IMPORT_GITHUB: '/projects/import/github',

    // Callback
    CALLBACK_STRIPE_SUCCESS: '/callback/stripe/success',
    CALLBACK_STRIPE_CANCEL: '/callback/stripe/cancel',
    CALLBACK_GITHUB_INSTALL: '/callback/github/install',
} as const;

export const ExternalRoutes = {
    DOCS: 'https://github.com/Carey8175/pinecone/tree/main/docs/content/docs',
    BLOG: 'https://github.com/Carey8175/pinecone/releases',
    GITHUB: 'https://github.com/Carey8175/pinecone',
    CONTACT: 'https://github.com/Carey8175/pinecone/issues/new',
    BOOK_DEMO: 'https://github.com/Carey8175/pinecone/issues/new?title=Demo%20request',
};

export const Git = {
    MAX_COMMIT_MESSAGE_LENGTH: 72,
    MAX_COMMIT_MESSAGE_BODY_LENGTH: 500,
} as const;

export const LocalForageKeys = {
    RETURN_URL: 'returnUrl',
} as const;
