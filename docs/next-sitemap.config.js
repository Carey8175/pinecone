// Modified for pinecone; see NOTICE.
/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.NEXT_PUBLIC_DOCS_URL || 'http://localhost:3001',
  generateRobotsTxt: false, // handled by route handler
  generateIndexSitemap: true,
};
