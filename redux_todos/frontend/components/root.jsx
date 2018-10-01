import React from 'react';
import { Provider } from 'react-redux';


const Root = function({store}) {
  return <Provider store={store}>
    <h1>Root component</h1>
  </Provider>;

};

export default Root;
