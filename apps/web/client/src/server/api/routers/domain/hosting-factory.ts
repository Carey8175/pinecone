// Modified for pinecone; see NOTICE.
import { HostingProvider, type HostingProviderAdapter } from '@pinecone/models';
import { FreestyleAdapter } from './adapters/freestyle';

export class HostingProviderFactory {
    static create(provider: HostingProvider = HostingProvider.FREESTYLE): HostingProviderAdapter {
        switch (provider) {
            case HostingProvider.FREESTYLE:
                return new FreestyleAdapter();
            default:
                throw new Error(`Unsupported hosting provider: ${provider}`);
        }
    }
} 