import { rebuild } from '@electron/rebuild';
import path from 'node:path';

const root = path.resolve(import.meta.dir, '..');
const studio = await Bun.file(path.join(root, 'apps/studio/package.json')).json();
await rebuild({
    buildPath: root,
    electronVersion: studio.devDependencies.electron,
    arch: process.arch,
    onlyModules: ['node-pty', '@parcel/watcher'],
});
console.log(`Native modules ready for Electron ${studio.devDependencies.electron}.`);
