// Modified for pinecone; see NOTICE.
import { WebsiteLayout } from '@/app/_components/website-layout';

export default function PolicyPage() {
    return (
        <WebsiteLayout>
            <main className="mx-auto max-w-4xl px-8 py-32 text-foreground-primary">
                <h1 className="mb-8 text-4xl font-semibold">Privacy Policy</h1>
                <p className="text-lg text-foreground-secondary">This self-hosted installation is operated by its deployer. Contact the operator for details about data processing, storage, analytics and third-party services enabled for this installation.</p>
            </main>
        </WebsiteLayout>
    );
}
