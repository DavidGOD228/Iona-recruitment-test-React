import * as React from 'react';
import {getBreeds} from '../actions'
import {breedReducer, PayloadTypes} from '../reducers';

type BreedsContextProps = {
    children: JSX.Element;
};

const initialBreedsState = {
    breeds: [],
    breed_id: '',
};

export const BreedsContext = React.createContext<any>(null);

export const BreedsContextProvider = (props: BreedsContextProps) => {
    // store state that uses custom reducer (redux analogue)
    const [breedsState, dispatch] = React.useReducer(breedReducer, initialBreedsState);

    // set breeds to the store
    const setBreeds = (breeds: Array<any>) => {
        dispatch({type: PayloadTypes.ONCHANGE, payload: {breeds}});
    }

    // set breed_id (id of the current chosen breed) to the store
    const setBreedId = (breed_id: string) => {
        dispatch({type: PayloadTypes.ONCHANGE, payload: {breed_id}});
    }

    // returns all breeds
    const getBreedsAsync = () => {
        return getBreeds();
    }

    React.useEffect(() => {
        getBreedsAsync().then((res) => {
            return setBreeds(res.data);
        });
    }, []);

    return <BreedsContext.Provider value={{breedsState, getBreedsAsync, setBreeds, setBreedId}}>{props.children}</BreedsContext.Provider>;
};
