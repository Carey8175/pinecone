// Modified for pinecone; see NOTICE.
import { describe, expect, it } from 'bun:test';
import { createSecureUrl } from '../src/domain';

describe('createSecureUrl', () => {
    it('should return an empty string for an undefined value', () => {
        expect(createSecureUrl(undefined)).toBe('');
    });

    it('should return an empty string for a null value', () => {
        expect(createSecureUrl(null)).toBe('');
    });

    it('should return an empty string for an empty string', () => {
        expect(createSecureUrl('')).toBe('');
    });

    it('should return an empty string for a whitespace string', () => {
        expect(createSecureUrl('   ')).toBe('');
    });

    it('should add https to a domain without a protocol', () => {
        expect(createSecureUrl('pinecone.example')).toBe('https://pinecone.example');
    });

    it('should convert http to https', () => {
        expect(createSecureUrl('http://pinecone.example')).toBe('https://pinecone.example');
    });

    it('should keep an existing https protocol', () => {
        expect(createSecureUrl('https://pinecone.example')).toBe('https://pinecone.example');
    });

    it('should handle domains with paths and queries', () => {
        expect(createSecureUrl('pinecone.example/path?query=1')).toBe('https://pinecone.example/path?query=1');
    });

    it('should handle www subdomains', () => {
        expect(createSecureUrl('www.pinecone.example')).toBe('https://www.pinecone.example');
    });

    it('should trim whitespace from the url', () => {
        expect(createSecureUrl('  http://pinecone.example/path ')).toBe('https://pinecone.example/path');
    });

    it('should return an empty string for an invalid url string', () => {
        expect(createSecureUrl('this is not a url')).toBe('');
    });

    it('should return an empty string for a url that only contains a protocol', () => {
        expect(createSecureUrl('http://')).toBe('');
    });

    it('should handle other protocols and convert them to https', () => {
        expect(createSecureUrl('ftp://pinecone.example')).toBe('https://pinecone.example');
    });

    it('should return an empty string for a url that does not contain a domain', () => {
        expect(createSecureUrl('a')).toBe('');
    });
});
