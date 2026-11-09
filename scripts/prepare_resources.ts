import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dir, '..');
const target = path.join(root, 'apps/studio/resources/bun');
await mkdir(target, { recursive: true });
const name = process.platform === 'win32' ? 'bun.exe' : `bun-${process.arch === 'arm64' ? 'aarch64' : process.arch}`;
await copyFile(process.execPath, path.join(target, name));
console.log(`Bundled Bun runtime: ${name}`);
