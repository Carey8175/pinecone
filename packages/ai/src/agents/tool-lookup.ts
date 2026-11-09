// Modified for pinecone; see NOTICE.
import { BashEditTool, BashReadTool, CheckErrorsTool, FuzzyEditFileTool, GlobTool, GrepTool, ListBranchesTool, ListFilesTool, PineconeInstructionsTool, ReadFileTool, ReadStyleGuideTool, SandboxTool, ScrapeUrlTool, SearchReplaceEditTool, SearchReplaceMultiEditFileTool, TerminalCommandTool, TypecheckTool, WebSearchTool, WriteFileTool } from "../tools";

export const allTools = [
    ListFilesTool,
    ReadFileTool,
    BashReadTool,
    PineconeInstructionsTool,
    ReadStyleGuideTool,
    ListBranchesTool,
    ScrapeUrlTool,
    WebSearchTool,
    GlobTool,
    GrepTool,
    TypecheckTool,
    CheckErrorsTool,
    SearchReplaceEditTool,
    SearchReplaceMultiEditFileTool,
    FuzzyEditFileTool,
    WriteFileTool,
    BashEditTool,
    SandboxTool,
    TerminalCommandTool,
];

export const readOnlyRootTools = [
    ListFilesTool,
    ReadFileTool,
    BashReadTool,
    PineconeInstructionsTool,
    ReadStyleGuideTool,
    ListBranchesTool,
    ScrapeUrlTool,
    WebSearchTool,
    GlobTool,
    GrepTool,
    TypecheckTool,
    CheckErrorsTool,
]
const editOnlyRootTools = [
    SearchReplaceEditTool,
    SearchReplaceMultiEditFileTool,
    FuzzyEditFileTool,
    WriteFileTool,
    BashEditTool,
    SandboxTool,
    TerminalCommandTool,
]

export const rootTools = [...readOnlyRootTools, ...editOnlyRootTools];

export const userTools = [
    ListBranchesTool,
    ListFilesTool,
]
