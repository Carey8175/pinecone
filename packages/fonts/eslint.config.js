// Modified for pinecone; see NOTICE.
import baseConfig from "@pinecone/eslint/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["test/data/**"],
  },
  ...baseConfig,
];