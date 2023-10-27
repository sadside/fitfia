import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {TaskPage} from "src/pages/TaskPage";
import {TasksPage} from "src/pages/TasksPage/ui/TasksPage.tsx";
import {Layout} from "src/app/layout/ui/Layout.tsx";
import {RegisterPage} from "src/pages/RegisterPage/ui/RegisterPage.tsx";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/registration" element={<RegisterPage />}/>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TasksPage />} />
                    <Route path="news" element={<TaskPage />}/>
                </Route>
            </Routes>
        </Suspense>
    );
};
