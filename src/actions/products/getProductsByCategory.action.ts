import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/products/products.data.json";

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    chip: string;
    slug: string;
    category: string;
    sku: string;
    details: string[];
    linkVasAlSuper: string;
}

export const getProductsByCategory = defineAction({
    input: z.object({
        categorySlug: z.string(),
        lang: z.enum(["es", "en"]).default("es")
    }),
    handler: async ({ categorySlug, lang }): Promise<{ message: string, data: Product[] }> => {
        // @ts-ignore
        const data = content[lang].products as Product[];
        const products = data.filter(p => p.category === categorySlug);

        return { message: "Products retrieved successfully", data: products };
    }
});
