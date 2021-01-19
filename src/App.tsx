import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppNavigator from './navigation/AppNavigator';
import {BreedsContextProvider, CatsContextProvider} from './contexts';

import './styles/index.scss'

const App: React.FC = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <BreedsContextProvider>
                    <CatsContextProvider>
                        <AppNavigator/>
                    </CatsContextProvider>
                </BreedsContextProvider>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
