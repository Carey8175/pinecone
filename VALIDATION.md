# Desktop validation

Validated on November 9, 2026 on macOS arm64 with Bun 1.3.12 and Electron 36.0.1.

| Check | Result |
| --- | --- |
| `bun install --frozen-lockfile` | Passed |
| `bun run typecheck` | All workspace checks passed |
| `bun test` | 161 passed, 0 failed |
| `bun run build:studio` | Foundation, renderer, main process and preloads built |
| `bun run rebuild:native` | Passed |
| Native import smoke check | `node-pty` and `@parcel/watcher` load in Electron 36 |
| macOS arm64 application packaging | Passed, unsigned local app produced |
| Desktop runtime | Loads bundled `file://` renderer; isolated app identity and data directory |
| Local project | Created from bundled starter; preview returns HTTP 200 on port 3000 |
| Visual editing | Selecting a heading identifies `App.tsx` and `h1`; styles panel shows live Tailwind classes |
| Source write-back | Changing the selected heading from 60px to 64px writes `text-[64px]` into its local TSX file |
| Verification cleanup | Demo source restored from the bundled starter |
| Final packaged app | Relaunched; desktop title and local project canvas visibly verified |
| Naming audit | Original product name retained only in NOTICE |
| License comparison | LICENSE.md is unchanged from the identified source snapshot |

The Web implementation was backed up locally before replacing the main source.
The desktop app identifier is `dev.carey8175.pinecone`, with its own application
data directory; the existing desktop client and its profile were not migrated.
Apache license and attribution copies are included in the application resources.

Build fixes include pinning compatible native ABI metadata, keeping dependency
installation under Bun, correcting a foundation type import and an undeclared
UI icon import, and bundling the current Bun runtime for project terminals.
The starter preview port was aligned with the editor's default port 3000.

A shutdown test exposed a terminal callback after window destruction. The main
window reference and terminal event delivery now guard against destroyed windows.
The corrected package was relaunched; another quit cycle was not forced while
the user was interacting with it.

AI chat, cloud hosting and OAuth require separately configured service credentials
and were not exercised. This public desktop source does not include a Codex agent
integration. The app's update feed is disabled until explicitly configured.
