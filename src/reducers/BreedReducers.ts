import {ActionMap, PayloadTypes} from './payloadTypes';
import {mainReducer} from './mainReducer';

export type BreedStateType = {
    breeds: Array<any>;
    breed_id: string;
};
type BreedPayload = {
    [PayloadTypes.ONCHANGE]: {
        breeds?: Array<any>;
        breed_id?: string;
    };
    [PayloadTypes.CLEARSTATE]: {
        breeds?: Array<any>;
        breed_id?: string;
    };
};

export type BreedActions = ActionMap<BreedPayload>[keyof ActionMap<BreedPayload>];

export const breedReducer = (state: BreedStateType, actions: BreedActions) => {
    return mainReducer(state, actions);
};