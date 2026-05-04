import { defineConfig } from 'astro/config';

// User-Pages-Repo (TerrifficDreamers.github.io) → Root-Deploy, kein base nötig.
// Eigene Domain später: site = 'https://terrificdreamers.de' setzen.
export default defineConfig({
  site: 'https://terrifficdreamers.github.io',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
});
