// Modified for pinecone; see NOTICE.
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import baseConfig from "@pinecone/eslint/base";
import nextjsConfig, { restrictEnvAccess } from "@pinecone/eslint/nextjs";
import reactConfig from "@pinecone/eslint/react";

/** @type {import('typescript-eslint').Config} */
export default [{
  ignores: [".next/**"],
}, ...baseConfig, ...reactConfig, ...nextjsConfig, ...restrictEnvAccess, ...storybook.configs["flat/recommended"]];
