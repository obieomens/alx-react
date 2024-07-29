import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <div id="root">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
