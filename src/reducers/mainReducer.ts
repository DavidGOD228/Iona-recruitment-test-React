import {PayloadTypes} from "./payloadTypes";

// I've used my own reducer and saves data into the context state instead of default Redux library
export const mainReducer = (state: any, actions: any) => {
    switch (actions.type) {
        case PayloadTypes.ONCHANGE: {
            const [stateKey] = Object.keys(state).filter((key, index) => actions.payload.hasOwnProperty(key));

            return {
                ...state,
                [stateKey]: actions.payload[stateKey],
            };
        }
        case PayloadTypes.CLEARSTATE: {
            return {
                ...actions.payload,
            };
        }
        default:
            return state;
    }
};