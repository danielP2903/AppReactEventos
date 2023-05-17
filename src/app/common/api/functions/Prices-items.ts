import { pricesItems } from "../pricesItems-data"

export const getPricesItemsByCategory = (idCategory:number) => {
    return pricesItems.filter((prices) => prices?.category?.idCategory === idCategory);
} 