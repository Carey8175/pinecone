// Modified for pinecone; see NOTICE.
import { Language } from '@pinecone/constants';
import messages from '../messages/en.json';

declare module 'next-intl' {
    interface AppConfig {
        Locale: Language;
        Messages: typeof messages;
    }
}
