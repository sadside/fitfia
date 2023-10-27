import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import {BrowserRouter} from 'react-router-dom';
import App from 'src/app/App.tsx';
import rootReducer from 'src/app/reducers';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
