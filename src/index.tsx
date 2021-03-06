import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from "react-router-dom";

import configStore from "./store";
import { App } from '~/containers';
import { BASE_PATH } from "~/config";

// Styles
import "~/styles/main.scss";

const { store, persistor } = configStore();


export const _store = store;

ReactDOM.render(
    <Provider store={_store}>
        <PersistGate loading={(<h1>Loading...</h1>)} persistor={persistor}>
            <BrowserRouter basename={BASE_PATH}>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root') as HTMLElement
);
