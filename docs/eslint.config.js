// Modified for pinecone; see NOTICE.
import baseConfig from "@pinecone/eslint/base";
import nextjsConfig from "@pinecone/eslint/nextjs";
import reactConfig from "@pinecone/eslint/react";

export default [
    {
        ignores: [".next/**", "tsconfig.tsbuildinfo", ".source/**"],
    },
    ...baseConfig,
    ...reactConfig,
    ...nextjsConfig,
];