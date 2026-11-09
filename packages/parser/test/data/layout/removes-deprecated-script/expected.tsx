import Script from 'next/script';
export default function Document() {
  return (
    <html>
            <head>
                <title>Test</title>
                <Script type="module" src="https://some-url/pinecone-dev/web/script.js" />
            </head>
            <body>
                <main />
            
        <Script src="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@v0.1.0/apps/web/client/public/pinecone-preload-script.js" strategy="afterInteractive" type="module" id="pinecone-preload-script"></Script>
      </body>
        </html>);}