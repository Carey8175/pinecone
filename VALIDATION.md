# pinecone validation

Validated on November 9, 2026 with Bun 1.3.12.

| Check | Result |
| --- | --- |
| `bun install --frozen-lockfile` | Passed; lockfile unchanged |
| `bun run typecheck` | Passed |
| `bun --filter @pinecone/docs typecheck` | Passed |
| `bun --filter @pinecone/web-preload typecheck` | Passed |
| `bun test --timeout 30000` | 1064 passed, 1 skipped, 0 failed |
| `bun --filter @pinecone/web-preload build` | Passed |
| `bun run build` | Passed using local placeholder service configuration |
| `bun --filter @pinecone/docs build` | Passed |
| Workspace namespace audit | All 30 workspaces and their `@pinecone/*` references resolve |
| Product naming audit | Original product name appears only in the source attribution in NOTICE |
| License comparison | LICENSE.md is byte-for-byte identical to the original |
| Logo | SVG rendered and visually inspected |

The source archive was downloaded without Git history. This repository starts
with a new root commit and has no upstream remote or Git submodules.
The browser preload CDN is pinned to the `v0.1.0` tag in this repository.

Live authentication, AI generation, email, billing, sandbox hosting and publishing
require the installation operator's own credentials and were not exercised.
The skipped test is the inherited optional `applyCodeChange` integration test.

The initial frozen install failed because the source lockfile included an absent
private admin workspace. Regenerating the lockfile resolved it. The Supabase CLI
download timed out through its postinstall URL; its official release asset was
downloaded with GitHub CLI and verified against the published SHA-256 checksum.
The preload-only TypeScript config was updated to resolve JSX and client aliases.
