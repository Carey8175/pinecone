// Modified for pinecone; see NOTICE.
'use client';

import { Icons } from "@pinecone/ui/icons";
import MessageScreen from "../message-screen";

export default function Success() {
    return (
        <MessageScreen
            title="Subscription Activated!"
            message="Your subscription to pinecone has been activated. You can now close this page."
            icon={<Icons.CheckCircled className="size-10 text-green-500" />}
        />
    )
}