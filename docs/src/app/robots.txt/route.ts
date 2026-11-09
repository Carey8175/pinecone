// Modified for pinecone; see NOTICE.
// Dynamic robots.txt using Next.js route handler
import { NextResponse } from 'next/server';

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${process.env.NEXT_PUBLIC_DOCS_URL || 'http://localhost:3001'}/sitemap.xml`;
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
