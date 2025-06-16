// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap'
import tailwindcss from "@tailwindcss/vite";


import react from '@astrojs/react';
import flowbiteReact from "flowbite-react/plugin/astro";


export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), flowbiteReact()],
  vite: {
    plugins: [tailwindcss()],
  server: {
  host: true,
  allowedHosts: ['5cab-191-109-110-195.ngrok-free.app'], // pon aquí el actual
}
  }
});