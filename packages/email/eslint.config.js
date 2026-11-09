// Modified for pinecone; see NOTICE.
import baseConfig from "@pinecone/eslint/base";
import reactConfig from "@pinecone/eslint/react";

/** @type {import('typescript-eslint').Config} */
export default [
  ...baseConfig,
  ...reactConfig,
];