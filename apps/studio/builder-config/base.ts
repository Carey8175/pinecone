// Modified for pinecone desktop; see NOTICE.
import { Configuration, TargetConfiguration } from 'electron-builder';

/**
 * @see https://www.electron.build/#documentation
 */
const config: Configuration = {
    appId: 'dev.carey8175.pinecone',
    asar: true,
    npmRebuild: false,
    directories: {
        output: 'release/${version}',
    },
    files: ['dist-electron', 'dist'],
    extraResources: [
        { from: '../../LICENSE.md', to: 'LICENSE.md' },
        { from: '../../NOTICE', to: 'NOTICE' },
        { from: 'resources/templates', to: 'templates' },
        {
            from: 'resources/bun',
            to: 'bun',
            filter: ['**/*'],
        },
    ],
    mac: {
        artifactName: '${productName}-${arch}.${ext}',
        category: 'public.app-category.developer-tools',
        hardenedRuntime: true,
        gatekeeperAssess: false,
        target: [
            {
                target: 'dmg',
                arch: ['x64', 'arm64'],
            } as TargetConfiguration,
            {
                target: 'zip',
                arch: ['x64', 'arm64'],
            } as TargetConfiguration,
        ],
    },
    win: {
        target: [
            {
                target: 'nsis',
                arch: ['x64'],
            } as TargetConfiguration,
        ],
        artifactName: '${productName}-setup.${ext}',
    },
    linux: {
        target: [
            {
                target: 'AppImage',
                arch: ['x64', 'arm64'],
            } as TargetConfiguration,
            {
                target: 'deb',
                arch: ['x64', 'arm64'],
            } as TargetConfiguration,
        ],
        artifactName: '${productName}-${arch}.${ext}',
        category: 'Utility',
        executableName: 'pinecone',
        icon: 'build/icon.icns',
        protocols: [
            {
                name: 'pinecone',
                schemes: ['pinecone'],
            },
        ],
    },
    nsis: {},
    publish: {
        provider: 'github',
        owner: 'Carey8175',
        repo: 'pinecone',
    },
};

export default config;
