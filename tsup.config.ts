import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react', 
    'react-dom', 
    '@remix-run/react',
    'js-cookie',
    '@portabletext/react',
    '@sanity/client',
    '@sanity/image-url',
    'lucide-react',
    'class-variance-authority',
    'clsx',
    'tailwind-merge'
  ],
}); 