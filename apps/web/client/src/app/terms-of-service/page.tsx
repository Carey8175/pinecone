// Modified for pinecone; see NOTICE.
import { WebsiteLayout } from '@/app/_components/website-layout';

export default function PolicyPage() {
    return (
        <WebsiteLayout>
            <main className="mx-auto max-w-4xl px-8 py-32 text-foreground-primary">
                <h1 className="mb-8 text-4xl font-semibold">Terms of Service</h1>
                <p className="text-lg text-foreground-secondary">This self-hosted installation is operated by its deployer. Contact the operator for the terms that apply to this service. The source code is licensed under Apache-2.0.</p>
            </main>
        </WebsiteLayout>
    );
}
