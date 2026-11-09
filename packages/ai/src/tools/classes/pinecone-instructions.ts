// Modified for pinecone; see NOTICE.
import { Icons } from '@pinecone/ui/icons';
import type { EditorEngine } from '@pinecone/web-client/src/components/store/editor/engine';
import { z } from 'zod';
import { PINECONE_INSTRUCTIONS } from '../../prompt/constants';
import { ClientTool } from '../models/client';

export class PineconeInstructionsTool extends ClientTool {
    static readonly toolName = 'pinecone_instructions';
    static readonly description = 'Get pinecone-specific instructions and guidelines';
    static readonly parameters = z.object({});
    static readonly icon = Icons.PineconeLogo;

    async handle(_input: z.infer<typeof PineconeInstructionsTool.parameters>, _editorEngine: EditorEngine): Promise<string> {
        return PINECONE_INSTRUCTIONS;
    }

    static getLabel(input?: z.infer<typeof PineconeInstructionsTool.parameters>): string {
        return 'Reading pinecone instructions';
    }
}