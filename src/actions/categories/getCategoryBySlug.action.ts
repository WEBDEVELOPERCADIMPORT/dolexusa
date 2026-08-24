import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/categories/categories.data.json";
import type { Category } from "./getCategories.action";

export const getCategoryBySlug = defineAction({
    input: z.object({
        slug: z.string(),
        lang: z.enum(["es", "en"]).default("es")
    }),
    handler: async ({ slug, lang }): Promise<{ message: string, data: Category | null }> => {
        // @ts-ignore
        const data = content[lang].categories as Category[];
        const category = data.find(c => c.slug === slug) || null;

        if (!category) {
            return { message: "Category not found", data: null };
        }

        return { message: "Category retrieved successfully", data: category };
    }
});
