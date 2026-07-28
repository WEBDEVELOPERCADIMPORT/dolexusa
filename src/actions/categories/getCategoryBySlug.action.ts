import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/categories/categories.data.json";
import type { Category } from "./getCategories.action";

export const getCategoryBySlug = defineAction({
    input: z.object({
        slug: z.string(),
    }),
    handler: async ({ slug }): Promise<{ message: string, data: Category | null }> => {
        const data = content.categories as Category[];
        const category = data.find(c => c.slug === slug) || null;

        if (!category) {
            return { message: "Category not found", data: null };
        }

        return { message: "Category retrieved successfully", data: category };
    }
});
