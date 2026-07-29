import { LANGUAGES } from '../i18n/config.i18n';
import categoriesData from '../data/categories/categories.data.json' with { type: "json" };
import productsData from '../data/products/products.data.json' with { type: "json" };

const BASE_URL = 'https://dolexusa.com';
const langs = Object.keys(LANGUAGES);

/**
 * Generate home URLs for all languages
 */
const getHomeUrls = (): string[] => {
    return langs.map((lang) => `${BASE_URL}/${lang}/`);
};

/**
 * Generate category URLs for all languages
 */
const getCategoryUrls = (): string[] => {
    const urls: string[] = [];
    for (const lang of langs) {
        for (const cat of categoriesData.categories) {
            urls.push(`${BASE_URL}/${lang}/${cat.slug}`);
        }
    }
    return urls;
};

/**
 * Generate product URLs for all languages
 */
const getProductUrls = (): string[] => {
    const urls: string[] = [];
    for (const lang of langs) {
        for (const prod of productsData.products) {
            urls.push(`${BASE_URL}/${lang}/${prod.category}/${prod.slug}`);
        }
    }
    return urls;
};

/**
 * Combine all URLs for the Astro sitemap configuration.
 */
export const getAllSitemapUrls = (): string[] => {
    return [
        ...getHomeUrls(),
        ...getCategoryUrls(),
        ...getProductUrls(),
    ];
};
