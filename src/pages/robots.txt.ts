import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
    // Aseguramos que la URL base coincida con https://dolexusa.com
    const baseUrl = site ? site.href.replace(/\/$/, '') : 'https://dolexusa.com';

    const robotsTxt = `
User-agent: *
Allow: /

# Deshabilitar rutas de servidor internas o endpoints API si los tienes
Disallow: /api/

# Apuntar al sitemap generado por @astrojs/sitemap
Sitemap: ${baseUrl}/sitemap-index.xml
`.trim();

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400', // Caché de 24h para Cloudflare CDN
        },
    });
};