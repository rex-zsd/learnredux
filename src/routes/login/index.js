export default (store) => ({
  path: 'login',
  getComponent(location, callback) {

    require.ensure([], (require) => {

      const Login = require('./container').default;
      const reducer = require('./reducer').default;

      store.injectReducer({ key: 'user', reducer });

      callback(null, Login);

    }, 'login');

  }
});
