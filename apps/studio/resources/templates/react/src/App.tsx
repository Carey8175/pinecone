export default function App() {
    return (
        <main className="min-h-screen bg-stone-100 p-12 text-stone-900">
            <nav className="mx-auto flex max-w-5xl items-center justify-between border-b border-stone-300 pb-6">
                <span className="text-2xl font-semibold tracking-tight">pinecone</span>
                <span className="text-sm text-stone-500">Your local design workspace</span>
            </nav>
            <section className="mx-auto max-w-5xl py-24">
                <p className="mb-6 text-sm font-medium uppercase tracking-widest text-emerald-700">Make something yours</p>
                <h1 className="mb-8 max-w-3xl text-6xl font-semibold leading-tight tracking-tight">Ideas take shape<br />right here.</h1>
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-stone-500">Select an element on the canvas, adjust its style, and see your changes reflected in the source.</p>
                <button className="rounded-xl bg-emerald-800 px-6 py-3 font-medium text-white">Start exploring</button>
                <div className="mt-20 grid grid-cols-3 gap-6">
                    {['Design visually', 'Keep your code', 'Build locally'].map((title) => (
                        <article key={title} className="rounded-2xl border border-stone-200 bg-white p-8">
                            <h2 className="text-xl font-medium">{title}</h2>
                            <p className="mt-4 text-stone-500">A canvas connected to your real project.</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
