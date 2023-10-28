import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {TaskPage} from 'src/pages/TaskPage';
import {TasksPage} from 'src/pages/TasksPage/ui/TasksPage.tsx';
// import {Layout} from 'src/app/layout/ui/Layout.tsx';
import {RegisterPage} from 'src/pages/RegisterPage';
import {LoginPage} from 'src/pages/LoginPage';
import RequireAuth from 'src/app/providers/routerHocs/ui/RequireAuth.tsx';
import {ConfirmCodePage} from 'src/pages/ConfirmCodePage';
import {NewsPage} from 'src/pages/NewsPage';
import {ProfilePage} from 'src/pages/ProfilePage';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/registration" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="code" element={<ConfirmCodePage />} />
                <Route path="/" element={<RequireAuth />}>
                    <Route index element={<TasksPage />} />
                    <Route path="task" element={<TaskPage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};
