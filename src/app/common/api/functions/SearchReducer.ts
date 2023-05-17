/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from "../../interfaces/Reducer";

export const SearchReducer = (state = {query:''}, action: Reducer<any>) => {
    switch (action.type) {
        case 'add query':
            
          return{ ...state, ...action.payload};
        
        default:
          return state;
      }
}