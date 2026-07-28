import { defineAction } from "astro:actions";
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
    handler: async (): Promise<{ message: string, data: Category[] }> => {
        const data = content.categories as Category[];
        return { message: "Categories retrieved successfully", data };
    }
});
