import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/products/products.data.json";
import type { Product } from "./getProductsByCategory.action";

export const getProductBySlug = defineAction({
    input: z.object({
        slug: z.string(),
    }),
    handler: async ({ slug }): Promise<{ message: string, data: Product | null }> => {
        const data = content.products as Product[];
        const product = data.find(p => p.slug === slug) || null;

        if (!product) {
            return { message: "Product not found", data: null };
        }

        return { message: "Product retrieved successfully", data: product };
    }
});
