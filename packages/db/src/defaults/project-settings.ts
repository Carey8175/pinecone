// Modified for pinecone; see NOTICE.
import { DefaultSettings } from '@pinecone/constants';
import type { ProjectSettings as DbProjectSettings } from '@pinecone/db';

export const createDefaultProjectSettings = (projectId: string): DbProjectSettings => {
    return {
        projectId,
        buildCommand: DefaultSettings.COMMANDS.build,
        runCommand: DefaultSettings.COMMANDS.run,
        installCommand: DefaultSettings.COMMANDS.install,
    };
};
