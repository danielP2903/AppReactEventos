import {  useReducer } from "react";
import { cotizacionReducer } from "../api/functions/CotizacionReducer";
import { PriceItemIndividual } from "../interfaces/Price";


const initialState:PriceItemIndividual[] = [];


export const useCotizacion = () => {
    const [cotizacionState, dispatchCotizacion] = useReducer(cotizacionReducer,initialState);
    




    const handleCotizacion = (cotizacion:PriceItemIndividual) => {
        
        const action = {
            type:'calculate',
            payload: cotizacion
        }
        dispatchCotizacion(action);
    }


    
    return {
        cotizacion:cotizacionState,
        handleCotizacion,
    }

}