import { access, cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const appRoot = fileURLToPath(new URL('../', import.meta.url));
const standaloneApp = join(appRoot, '.next', 'standalone', 'apps', 'web');

await access(join(standaloneApp, 'server.js'));
await mkdir(join(standaloneApp, '.next'), { recursive: true });
await cp(join(appRoot, '.next', 'static'), join(standaloneApp, '.next', 'static'), {
  recursive: true,
});
await cp(join(appRoot, 'public'), join(standaloneApp, 'public'), { recursive: true });
