import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
  },
};

export default nextConfig;
