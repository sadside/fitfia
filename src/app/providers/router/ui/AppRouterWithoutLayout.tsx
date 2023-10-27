import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthPage} from "src/pages/AuthPage";

export const AppRouterWithoutLayout = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/auth"} element={<AuthPage />}/>
            </Routes>
        </Suspense>
    );
};
