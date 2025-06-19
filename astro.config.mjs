import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',      // exporta archivos HTML/CSS/JS estáticos
  site: 'https://francordel.github.io',  // configuración necesaria para Pages
});