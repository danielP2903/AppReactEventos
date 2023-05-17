import { CategoryEvent } from "./CategoryEvent";

export interface IEvents {
    id:number;
    name:string;
    description: string;
    duration:string;
    price:string;
    img:string;
    type:CategoryEvent;
    images: string[],
    itemsInclude:string[];
}