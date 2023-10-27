import {Navigate} from 'react-router-dom';
import {Layout} from 'src/app/layout';
import {useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {Loader} from 'src/shared/ui/Loader';

const RequireAuth = () => {
    const isAuth = useAppSelector(state => state.user.isAuth);
    const loading = useAppSelector(state => state.user.status);

    if (loading === 'loading user info') return <Loader />;

    if (isAuth && loading == 'idle') return <Layout />;
    return <Navigate to="/login" />;
};

export default RequireAuth;
