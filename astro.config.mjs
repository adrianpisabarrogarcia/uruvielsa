import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel(
    {
      webAnalytics: {
        enabled: true,
      },
      speedInsights: {
        enabled: true,
      },
    }
  ),
});