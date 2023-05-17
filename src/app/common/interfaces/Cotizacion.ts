import { PriceItemIndividual } from "./Price";

export interface ICotizacion {
    items:PriceItemIndividual[],
    total:number;
}