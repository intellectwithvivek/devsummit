import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    /**
     * Resize at the image host rather than through `/_next/image`.
     *
     * Vercel meters its built-in optimizer: once a project runs out of Image
     * Optimization allowance every request to `/_next/image` answers
     * `402 Payment Required` and the site loses all of its photography. A free
     * template should not depend on a paid quota, so the loader in
     * lib/image-loader.ts hands the resize to the CDN that is already serving
     * the file. See that file for how other hosts are handled.
     *
     * To go back to Vercel's optimizer, delete `loader` and `loaderFile`.
     * `remotePatterns` below is what it reads, and is kept for that reason.
     */
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',

    /*
     * Nothing on this site is displayed above ~1400px, so the default ladder's
     * 2048 and 3840 entries only ever cost bandwidth — and the largest entry is
     * what a browser without srcset support downloads.
     */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'i.pravatar.cc', pathname: '/**' },
    ],
  },
}

export default nextConfig
