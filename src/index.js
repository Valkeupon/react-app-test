import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const OneSignal = window.OneSignal || [];

OneSignal.push(function() {
    OneSignal.init({
      appId: "cf3ba5ec-d0a3-416b-b8db-391ba3cfda49",
      autoRegister: false,
      notifyButton: {
        enable: true,
      }
    });
});

ReactDOM.render( <App/>, document.getElementById('root'));
registerServiceWorker();
