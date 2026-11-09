import React from 'react';import Script from "next/script";
export default function Layout() {
  return <html>
    <body><Script src="https://cdn.jsdelivr.net/gh/Carey8175/pinecone@v0.1.0/apps/web/client/public/pinecone-preload-script.js" strategy="afterInteractive" type="module" id="pinecone-preload-script"></Script></body>
  </html>;}