import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// render micro frontend function
window.rendercreatereactapp = (containerId, history, counterApp, students, incrementContainerCounter) => {
  ReactDOM.render(
    <App history={history} students={students} counterApp={counterApp} incrementContainerCounter={incrementContainerCounter} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountcreatereactapp = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('createreactapp-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
