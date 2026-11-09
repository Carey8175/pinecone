// Modified for pinecone; see NOTICE.
import { WebsiteLayout } from '@/app/_components/website-layout';
import { Icons } from '@pinecone/ui/icons';

export default function AboutPage() {
    return (
        <WebsiteLayout>
            <main className="mx-auto max-w-4xl px-8 py-32 text-foreground-primary">
                <Icons.PineconeLogo className="mb-8 h-12 w-12" />
                <h1 className="mb-8 text-5xl font-semibold tracking-tight">Design with pinecone</h1>
                <p className="mb-6 text-xl text-foreground-secondary">A visual workspace for building Next.js and Tailwind interfaces with AI.</p>
                <p className="text-lg text-foreground-secondary">Work on a live canvas, refine the details, and keep your code as the source of truth.</p>
            </main>
        </WebsiteLayout>
    );
}
