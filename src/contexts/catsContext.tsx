import * as React from 'react';
import {getCats, getCatById} from '../actions'
import {catReducer, PayloadTypes} from '../reducers';

type CatsContextProps = {
    children: JSX.Element;
};

const initialCatsState = {
    cats: [],
};

export const CatsContext = React.createContext<any>(null);

export const CatsContextProvider = (props: CatsContextProps) => {
    // store state that uses custom reducer (redux analogue)
    const [catsState, dispatch] = React.useReducer(catReducer, initialCatsState);

    // set cats to the store
    const setCats = (cats: Array<any>) => {
        dispatch({type: PayloadTypes.ONCHANGE, payload: {cats}});
    }

    // returns cats by breed_id (id of the current chosen breed)
    const getCatsAsync = (breed_id: string, page: number, limit: number) => {
        return getCats(breed_id, page, limit);
    }

    // returns cat details by cat_id (id of the current chosen cat)
    const getCatByIdAsync = (cat_id: string) => {
        return getCatById(cat_id);
    }

    return <CatsContext.Provider value={{catsState, getCatsAsync,getCatByIdAsync,setCats}}>{props.children}</CatsContext.Provider>;
};
