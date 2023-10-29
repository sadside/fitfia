import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from 'src/app/App.tsx';
import rootReducer from 'src/app/reducers';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
