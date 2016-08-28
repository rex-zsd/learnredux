export default (store) => ({
  path: 'test',
  getComponent(location, callback) {

    require.ensure([], (require) => {

      const Test = require('./container').default;
      const reducer = require('./reducer').default;

      store.injectReducer({ key: 'test', reducer });

      callback(null, Test);

  }, 'test');

  }
});
