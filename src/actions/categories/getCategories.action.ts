import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/categories/categories.data.json";

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    logo: string;
    banner: string;
    color: string;
}

export const getCategories = defineAction({
    input: z.object({
        lang: z.enum(["es", "en"]).default("es")
    }),
    handler: async ({ lang }): Promise<{ message: string, data: Category[] }> => {
        // @ts-ignore
        const data = content[lang].categories as Category[];
        return { message: "Categories retrieved successfully", data };
    }
});
