import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ManagerUsers from '~/pages/ManagerUsers';

import config from '~/config';

const publicRoutes = [
    {
        path: config.home,
        component: Home,
    },
    {
        path: config.login,
        component: Login,
    },
    {
        path: config.managerusers,
        component: ManagerUsers,
    },
];

export default publicRoutes;
