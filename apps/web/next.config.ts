import type { NextConfig } from 'next';
import { resolve } from 'node:path';
import process from 'node:process';

const nextConfig: NextConfig = {
  output: 'standalone',
  // The workspace scripts execute from the application directory.
  outputFileTracingRoot: resolve(process.cwd(), '../..'),
};

export default nextConfig;
