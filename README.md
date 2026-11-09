<!-- Modified for pinecone desktop; see NOTICE. -->

# pinecone desktop

An Electron desktop editor for local React projects: visual canvas, layers,
source editing, terminal and AI-assisted changes. Built from the public desktop
source release, version 0.2.31.

![pinecone](assets/logo.svg)

## Run locally

Requires Bun and macOS developer tools for native dependencies.

```sh
bun install --frozen-lockfile
bun run desktop
```

The application supports offline local project editing without Supabase.
Cloud services and AI require your own configuration in `apps/studio/.env`;
see `.env.example`. The public desktop source does not include the newer
Codex-integrated interface shown in some separately distributed clients.

Application data is stored in the separate `pinecone` directory under the OS
application data directory. The app uses its own profile.
Automatic updates remain off until a pinecone release feed is configured.

To package an unsigned macOS application:

```sh
bun run build:studio
bun run rebuild:native
cd apps/studio
CSC_IDENTITY_AUTO_DISCOVERY=false bun run package --dir --mac --arm64
```

## License

Apache-2.0; see [LICENSE.md](LICENSE.md) and [NOTICE](NOTICE).
