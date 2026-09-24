import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  redirects: {
    '/services': '/pricing/',
    '/services/': '/pricing/',
    '/pricing-plans': '/pricing/',
    '/pricing-plans/': '/pricing/',
    '/contact': '/book/',
    '/contact/': '/book/',
    '/contact-us': '/book/',
    '/contact-us/': '/book/',
    '/deal-intake': '/submit-deal/',
    '/deal-intake/': '/submit-deal/',
    '/submit': '/submit-deal/',
    '/submit/': '/submit-deal/',
    '/es/servicios': '/es/precios/',
    '/es/servicios/': '/es/precios/',
    '/es/contacto': '/es/enviar-transaccion/',
    '/es/contacto/': '/es/enviar-transaccion/',
    '/blog': '/resources/',
    '/blog/': '/resources/'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
