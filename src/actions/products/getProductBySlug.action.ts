import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/products/products.data.json";
import type { Product } from "./getProductsByCategory.action";

export const getProductBySlug = defineAction({
    input: z.object({
        slug: z.string(),
        lang: z.enum(["es", "en"]).default("es")
    }),
    handler: async ({ slug, lang }): Promise<{ message: string, data: Product | null }> => {
        // @ts-ignore
        const data = content[lang].products as Product[];
        const product = data.find(p => p.slug === slug) || null;

        if (!product) {
            return { message: "Product not found", data: null };
        }

        return { message: "Product retrieved successfully", data: product };
    }
});
