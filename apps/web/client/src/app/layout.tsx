// Modified for pinecone; see NOTICE.
import '@/styles/globals.css';
import '@pinecone/ui/globals.css';

import RB2BLoader from '@/components/rb2b-loader';
import { TelemetryProvider } from '@/components/telemetry-provider';
import { env } from '@/env';
import { FeatureFlagsProvider } from '@/hooks/use-feature-flags';
import { TRPCReactProvider } from '@/trpc/react';
import { Toaster } from '@pinecone/ui/sonner';
import { type Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './_components/theme';
import { AuthProvider } from './auth/auth-context';
import { faqSchema, organizationSchema } from './seo';

const isProduction = env.NODE_ENV === 'production';

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title: 'pinecone – Cursor for Designers',
    description: 'The power of Cursor for your own website. pinecone lets you edit your React website and write your changes back to code in real-time. Iterate and experiment with AI.',
    icons: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }],
    openGraph: {
        url: new URL('/', env.NEXT_PUBLIC_SITE_URL).toString(),
        type: 'website',
        siteName: 'pinecone',
        title: 'pinecone – Cursor for Designers',
        description: 'The power of Cursor for your own website. pinecone lets you edit your React website and write your changes back to code in real-time. Iterate and experiment with AI.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'pinecone – Cursor for Designers',
        description: 'The power of Cursor for your own website. pinecone lets you edit your React website and write your changes back to code in real-time. Iterate and experiment with AI.',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={inter.variable} suppressHydrationWarning>
            <head>
                <link rel="canonical" href={new URL('/', env.NEXT_PUBLIC_SITE_URL).toString()} />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </head>
            <body>
                {isProduction && (
                    <>
                        <RB2BLoader />
                    </>
                )}
                <TRPCReactProvider>
                    <FeatureFlagsProvider>
                        <TelemetryProvider>
                            <ThemeProvider
                                attribute="class"
                                forcedTheme="dark"
                                enableSystem
                                disableTransitionOnChange
                            >
                                <AuthProvider>
                                    <NextIntlClientProvider>
                                        {children}
                                        <Toaster />
                                    </NextIntlClientProvider>
                                </AuthProvider>
                            </ThemeProvider>
                        </TelemetryProvider>
                    </FeatureFlagsProvider>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
