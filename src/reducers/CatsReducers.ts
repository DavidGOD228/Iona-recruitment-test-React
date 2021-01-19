import {ActionMap, PayloadTypes} from './payloadTypes';
import {mainReducer} from './mainReducer';

export type CatStateType = {
    cats: Array<any>;
};
type CatPayload = {
    [PayloadTypes.ONCHANGE]: {
        cats: Array<any>;
    };
    [PayloadTypes.CLEARSTATE]: {
        cats: Array<any>;
    };
};

export type CatActions = ActionMap<CatPayload>[keyof ActionMap<CatPayload>];

export const catReducer = (state: CatStateType, actions: CatActions) => {
    return mainReducer(state, actions);
};