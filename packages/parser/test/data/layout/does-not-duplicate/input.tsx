import Script from 'next/script';

export default function Document() {
    return (
        <html>
            <head>
                <title>Test</title>
                <Script type="module" src="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@main/apps/web/client/public/pinecone-preload-script.js" strategy="afterInteractive" type="module" id="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@main/apps/web/client/public/pinecone-preload-script.js" />
            </head>
            <body>
                <main />
                <Script
                    type="module"
                    src="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@main/apps/web/client/public/pinecone-preload-script.js" strategy="afterInteractive" type="module" id="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@main/apps/web/client/public/pinecone-preload-script.js"
                    id="pinecone-preload-script"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
