// Modified for pinecone desktop; see NOTICE.
import type { RunBunCommandResult } from '@pinecone/models';
import { runBunCommand } from '../bun';

export async function runBuildScript(
    folderPath: string,
    buildScript: string,
): Promise<RunBunCommandResult> {
    return await runBunCommand(buildScript, {
        cwd: folderPath,
        env: { ...process.env, NODE_ENV: 'production' },
    });
}
