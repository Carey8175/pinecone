// Modified for pinecone desktop; see NOTICE.
import { createAnthropic } from '@ai-sdk/anthropic';
import type { StreamRequestType } from '@pinecone/models/chat';
import { BASE_PROXY_ROUTE, FUNCTIONS_ROUTE, ProxyRoutes } from '@pinecone/models/constants';
import { CLAUDE_MODELS, LLMProvider } from '@pinecone/models/llm';
import { type LanguageModelV1 } from 'ai';
import { getRefreshedAuthTokens } from '../auth';
export interface PineconePayload {
    requestType: StreamRequestType;
}

export async function initModel(
    provider: LLMProvider,
    model: CLAUDE_MODELS,
    payload: PineconePayload,
): Promise<LanguageModelV1> {
    switch (provider) {
        case LLMProvider.ANTHROPIC:
            return await getAnthropicProvider(model, payload);
        default:
            throw new Error(`Unsupported provider: ${provider}`);
    }
}

async function getAnthropicProvider(
    model: CLAUDE_MODELS,
    payload: PineconePayload,
): Promise<LanguageModelV1> {
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    const proxyUrl = `${import.meta.env.VITE_SUPABASE_API_URL}${FUNCTIONS_ROUTE}${BASE_PROXY_ROUTE}${ProxyRoutes.ANTHROPIC}`;

    const config: {
        apiKey?: string;
        baseURL?: string;
        headers?: Record<string, string>;
    } = {};

    if (apiKey) {
        config.apiKey = apiKey;
    } else {
        const authTokens = await getRefreshedAuthTokens();
        if (!authTokens) {
            throw new Error('AI is not configured. Configure an Anthropic API key to use AI chat.');
        }
        config.apiKey = '';
        config.baseURL = proxyUrl;
        config.headers = {
            Authorization: `Bearer ${authTokens.accessToken}`,
            'X-pinecone-Request-Type': payload.requestType,
            'anthropic-beta': 'output-128k-2025-02-19',
        };
    }

    const anthropic = createAnthropic(config);
    return anthropic(model, {
        cacheControl: true,
    });
}
