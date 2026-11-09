<!-- Modified for pinecone; see NOTICE. -->

# pinecone

An AI-assisted visual editor for Next.js and Tailwind CSS. Edit interfaces on a
canvas, inspect the source, and write changes directly back to the codebase.

![pinecone](assets/logo.svg)

## Local setup

Requires Bun 1.3.1 or newer and Docker for the local Supabase backend.

```sh
git clone https://github.com/Carey8175/pinecone.git
cd pinecone
bun install --frozen-lockfile
cp apps/web/client/.env.example apps/web/client/.env
bun run backend:start
# Fill in local Supabase credentials, a CodeSandbox key and an OpenRouter key.
bun run dev
```

Open http://localhost:3000. Deployment requires your own service accounts and
domain configuration. Domains ending in `.example` are placeholders; no public
pinecone website or support mailbox is configured. Set `NEXT_PUBLIC_SITE_URL`,
`NEXT_PUBLIC_HOSTING_DOMAIN`, `PINECONE_SUPPORT_EMAIL` and
`PINECONE_CONTACT_EMAIL` for your installation.

## Commands

```sh
bun run typecheck
bun test --timeout 30000
bun run build
bun run docs
```

The editor lives in `apps/web/client`, browser instrumentation in
`apps/web/preload`, shared packages in `packages`, and documentation in `docs`.
All workspace packages use the `@pinecone` namespace. The optional private admin
application is not included in this repository.

## License

Apache-2.0. See [LICENSE.md](LICENSE.md) and [NOTICE](NOTICE).
