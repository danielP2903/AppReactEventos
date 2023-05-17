import { PriceItemIndividual } from '../../interfaces/Price';
import { Reducer } from '../../interfaces/Reducer';
export const cotizacionReducer = (state: PriceItemIndividual[] = [], action: Reducer<PriceItemIndividual>) => {
    switch (action.type) {
      case 'calculate':
        return [...state, action.payload];
      
      default:
        return state;
    }
  };
  