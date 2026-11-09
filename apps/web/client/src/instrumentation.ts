// Modified for pinecone; see NOTICE.
import { registerOTel } from '@vercel/otel';
import { LangfuseExporter } from 'langfuse-vercel';

export function register() {
    registerOTel({ serviceName: 'pinecone Web', traceExporter: new LangfuseExporter() });
}
