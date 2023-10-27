import './styles/index.scss';
// import {Outlet} from "react-router-dom";
import {AppRouter} from 'src/app/providers/router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';
import {useAppDispatch} from 'src/shared/utils/hooks/redux.ts';
import {getUserInfoThunk} from 'src/entities/User/userThunks.ts';
import {getToken} from 'src/shared/api/Cookie.ts';
import {setStatus} from 'src/entities/User/userSlice.ts';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (getToken()) dispatch(getUserInfoThunk());
        else dispatch(setStatus('idle'));
    }, []);

    return (
        <div>
            <AppRouter />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                progressStyle={{
                    color: 'red',
                }}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </div>
    );
}

export default App;
