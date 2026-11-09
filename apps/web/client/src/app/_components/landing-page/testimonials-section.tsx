// Modified for pinecone; see NOTICE.
import { Icons } from '@pinecone/ui/icons';

export function TestimonialsSection() {
    return (
        <section className="mx-auto max-w-6xl px-8 py-24 text-foreground-primary">
            <Icons.PineconeLogo className="mb-6 h-10 w-10" />
            <h2 className="mb-8 text-3xl font-semibold">From an idea to a working interface</h2>
            <div className="grid gap-8 md:grid-cols-3">
                <p className="text-foreground-secondary">Build on a live canvas with your real components.</p>
                <p className="text-foreground-secondary">Refine layouts and styles with AI assistance.</p>
                <p className="text-foreground-secondary">Keep every change in your codebase.</p>
            </div>
        </section>
    );
}
