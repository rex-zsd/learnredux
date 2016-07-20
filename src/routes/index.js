import checkAuth from '../util/checkAuth.js';
import App from '../components/App/app.jsx';
import Index from './index/index';
import Login from './login/index';

const createRoutes = (store) => ({
  path: '/',
  component: App,
  onEnter: checkAuth,
  onChange: checkAuth,
  indexRoute: null,
  childRoutes: [
    Index(store),
    Login(store)
  ]
});

export default createRoutes;
