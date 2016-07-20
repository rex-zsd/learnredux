export default (store) => ({
  path: 'login',
  getComponent(location, callback) {

    require.ensure([], (require) => {

      const Login = require('./login.jsx').default;
      const reducer = require('./login.reducer').default;

      store.injectReducer({ key: 'user', reducer });

      callback(null, Login);

    }, 'login');

  }
});
