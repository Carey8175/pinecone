// Modified for pinecone desktop; see NOTICE.
import { useEditorEngine } from '@/components/Context';
import { Button } from '@pinecone/ui/button';
import { Icons } from '@pinecone/ui/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@pinecone/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { observer } from 'mobx-react-lite';

export const ChatControls = observer(() => {
    const editorEngine = useEditorEngine();
    const handleNewChat = () => {
        editorEngine.chat.conversation.startNewConversation();
        editorEngine.chat.focusChatInput();
    };

    return (
        <div className="flex flex-row opacity-0 transition-opacity duration-200 group-hover/panel:opacity-100">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={'ghost'}
                        size={'icon'}
                        className="p-2 w-fit h-fit hover:bg-background-pinecone"
                        onClick={handleNewChat}
                        disabled={editorEngine.chat.isWaiting}
                    >
                        <Icons.Plus />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>New Chat</p>
                    <TooltipArrow className="fill-foreground" />
                </TooltipContent>
            </Tooltip>
        </div>
    );
});
