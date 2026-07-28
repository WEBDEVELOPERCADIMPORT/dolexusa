import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import content from "../../data/places/places.data.json";

export interface Place {
    id: string;
    name: string;
    address: string;
    zipCode: string;
}

export const getPlacesByZipcode = defineAction({
    input: z.object({
        zipcode: z.string(),
    }),
    handler: async ({ zipcode }): Promise<{ message: string, data: Place[] }> => {
        const data = content.places as Place[];
        const matchedPlaces = data.filter(p => p.zipCode === zipcode);
        
        return { message: "Places retrieved successfully", data: matchedPlaces };
    }
});
