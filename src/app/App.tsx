import './styles/index.scss';
// import {Outlet} from "react-router-dom";
import {AppRouter} from 'src/app/providers/router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
