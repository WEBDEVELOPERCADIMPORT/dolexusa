// src/actions/index.ts
import { getCategories } from './categories/getCategories.action';
import { getCategoryBySlug } from './categories/getCategoryBySlug.action';
import { getProductsByCategory } from './products/getProductsByCategory.action';
import { getProductBySlug } from './products/getProductBySlug.action';
import { getReviews } from './reviews/getReviews.action';
import { getPlacesByZipcode } from './places/getPlacesByZipcode.action';

export const server = {
    getCategories,
    getCategoryBySlug,
    getProductsByCategory,
    getProductBySlug,
    getReviews,
    getPlacesByZipcode
};