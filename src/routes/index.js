import checkAuth from '../util/checkAuth.js';
import App from '../components/App/app.jsx';
import Test from './test';
import Login from './login';

const createRoutes = (store) => ({
  path: '/',
  component: App,
  onEnter: checkAuth,
  onChange: checkAuth,
  indexRoute: null,
  childRoutes: [
    Test(store),
    Login(store)
  ]
});

export default createRoutes;
