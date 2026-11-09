import Script from 'next/script';
import React from 'react';
export default function Layout() {
  return (
    <html>
            <head>
                <Script src="https://example.com/other.js" />
            </head>
            <body>
                <main />
            
        <Script src="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@v0.1.0/apps/web/client/public/pinecone-preload-script.js" strategy="afterInteractive" type="module" id="pinecone-preload-script"></Script>
      </body>
        </html>);}